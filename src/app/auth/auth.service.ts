import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from './user';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users');

  private auth =  getAuth();

  constructor(private afs: AngularFirestore, private sb: MatSnackBar, private router: Router) { }

  register(u: User){
        createUserWithEmailAndPassword(this.auth, u.email, u.senha)
        .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  login(email:string, senha:string){
      signInWithEmailAndPassword(this.auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      this.sb.open('Login realizado com sucesso!', 'ok', {duration: 2000})
      this.router.navigateByUrl('/dashboard')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.sb.open('Erro', 'ok', {duration: 2000})
   
    });
  }

  getCurrentUser(){
    return this.auth.currentUser
  }
}


