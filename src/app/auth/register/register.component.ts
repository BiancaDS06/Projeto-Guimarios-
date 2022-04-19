import { FirestoreService } from './../../Services/firestore.service';
import { AuthService } from './../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewRegister } from './model/viewRegister.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  viewRegister : ViewRegister = {} as ViewRegister;
  //Instância da classe
  newUserRegister = new User()

  address$ : any;
  end$ : any;
  persona$ : any;




  constructor(private fb: FormBuilder, private authService: AuthService, private snackBar : MatSnackBar, private router: Router, private fs: FirestoreService) { }

  ngOnInit(): void { //Inicia a pag e chama a função logo
    this.viewRegister.persona = true;
  }



  setPersona(e:any){
    // this.persona$ = e.value //Vai passar um evento e pegar o valor dentro do input
    this.viewRegister.persona = false;
    this.viewRegister.address = true;
    //Vou pegar o nome do user e ele vai receber o valor no input nome do persona
    this.newUserRegister.nome = e.nome
    this.newUserRegister.nascimento = e.nascimento
    this.newUserRegister.sobrenome = e.sobrenome
    this.newUserRegister.genero = e.genero
    this.newUserRegister.cpf = e.cpf
    this.newUserRegister.turma = e.turma
  }

  setAddress(e:any){
    this.viewRegister.address = false;
    this.viewRegister.end = true;

    this.newUserRegister.rua = e.rua
    this.newUserRegister.complemento = e.complemento
    this.newUserRegister.bairro = e.bairro
    this.newUserRegister.cidade = e.cidade
    this.newUserRegister.numero = e.numero
    this.newUserRegister.estado = e.estado
  }

  setEnd(e:any){
    this.newUserRegister.email = e.email
    this.newUserRegister.senha = e.senha

    this.fs.register(this.newUserRegister)
    this.authService.register(this.newUserRegister)
    this.snackBar.open('Cadastro realizado com sucesso!', 'ok', {duration: 2000})
    this.router.navigateByUrl('/login')
  }

  persona(){
    this.viewRegister.persona = true
    this.viewRegister.address = false
    this.viewRegister.end = false
  }

  address(){
    this.viewRegister.persona = false
    this.viewRegister.address = true
    this.viewRegister.end = false
  }

  end(){
    this.viewRegister.persona = false
    this.viewRegister.address = false
    this.viewRegister.end = true
  }

}
