import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private as: AuthService, private sb: MatSnackBar, private router: Router){ }
  
  canActivate() {

    if(!(this.as.getCurrentUser())){
      this.sb.open('Usuário não cadastrado, cadastre-se clicando em AQUI', 'ok')
      this.router.navigateByUrl('/login')
      return false;
    }

    return true
  }

}
