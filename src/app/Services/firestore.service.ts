import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore}  from "firebase/firestore";
import { environment } from 'src/environments/environment';
import { collection, addDoc } from "firebase/firestore";
import { User } from '../auth/user';
import { FirebaseApp } from '@angular/fire/app';

@Injectable()
export class FirestoreService {

  private app : FirebaseApp
  private db : Firestore

  constructor() {
    this.app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async register(u:User){
    try {
      const docRef = await addDoc(collection(this.db, "users"), {
        nome: u.nome,
        sobrenome: u.sobrenome,
        cpf: u.cpf,
        nascimento: u.nascimento,
        genero: u.genero,
        turma: u.turma,
        rua: u.rua,
        complemento: u.complemento,
        bairro: u.bairro,
        cidade: u.cidade,
        numero: u.numero,
        estado: u.estado,
        email: u.email
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}
