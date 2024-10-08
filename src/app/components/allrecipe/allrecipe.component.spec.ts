import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrecipeComponent } from './allrecipe.component';

describe('AllrecipeComponent', () => {
  let component: AllrecipeComponent;
  let fixture: ComponentFixture<AllrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllrecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
