import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGuimariosComponent } from './login-guimarios.component';

describe('LoginGuimariosComponent', () => {
  let component: LoginGuimariosComponent;
  let fixture: ComponentFixture<LoginGuimariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGuimariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGuimariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
