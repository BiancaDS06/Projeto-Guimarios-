import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // birth = new Date('2021-04-23T10:00:00.000');

  formPersona : FormGroup;//Agrupar dados e agrega valor

  @Output() formEmitterPersona = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {

    this.formPersona = this.formBuilder.group({

      nome : ['', Validators.required],
      sobrenome : ['', Validators.required],
      cpf : ['', Validators.required],
      nascimento : ['', Validators.required],
      genero : ['', Validators.required],
      turma : ['', Validators.required]

    })
  }

  ngOnInit(): void {
  }

  formPersonaEmitter(){
    console.log(this.formPersona.value)
    this.formEmitterPersona.emit(this.formPersona.value)
  }

}
