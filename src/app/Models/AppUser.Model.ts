export interface AppUser {
    id: string;
    email: string;
    password: string;
    username:string;
    confirmPassword: string;
    roles?: string[];
    // Diğer kullanıcı özellikleri
  }
  