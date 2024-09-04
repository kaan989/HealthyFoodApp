import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksRecipesComponent } from './drinks-recipes.component';

describe('DrinksRecipesComponent', () => {
  let component: DrinksRecipesComponent;
  let fixture: ComponentFixture<DrinksRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
