import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { AppUser } from '../Models/AppUser.Model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7046/api/Account';
  private currentUserSubject: BehaviorSubject<AppUser | null>;
  public currentUser: Observable<AppUser | null>;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    const storedUser = isPlatformBrowser(this.platformId) ? localStorage.getItem('currentUser') : null;
    this.currentUserSubject = new BehaviorSubject<AppUser | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(registerModel: AppUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerModel);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }, { withCredentials: true })
      .pipe(map(response => {
        if (isPlatformBrowser(this.platformId) && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response.token));
          this.currentUserSubject.next(response.token);
        }
        return response;
      }));
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true }).pipe(
      map(response => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
        return response;
      })
    );
  }

  getUserId(): Observable<{ Id: string }> {
    return this.http.get<{ Id: string }>(`${this.baseUrl}/details`);
  }

  isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      // Tarayıcı ortamında olduğumuzdan emin ol
      const token = localStorage.getItem('currentUser'); // Token'ı localStorage'den al
      return token != null; // Eğer token varsa kullanıcı oturum açmıştır
    }
    return false; // Tarayıcı ortamında değilse, varsayılan olarak false döndür
  }
  

  // Token'ı decode etmeden rol bilgilerini almak için
  getUserRole(): string | null {
    const token = localStorage.getItem('currentUser');
    if (token) {
      // Token'ı decode et ve rolü al
      const decodedToken: any = JSON.parse(atob(token.split('.')[1]));
      return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];// Burada 'role' adını token'da kullandığınız rol anahtarına göre değiştirin
    }
    return null;
  }
}
