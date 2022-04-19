import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-guimarios',
  templateUrl: './login-guimarios.component.html',
  styleUrls: ['./login-guimarios.component.css']
})
export class LoginGuimariosComponent implements OnInit {

  hide = true;

  newUserLogin = new User()

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'senha': ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb : FormBuilder,private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.senha)
  }



}
