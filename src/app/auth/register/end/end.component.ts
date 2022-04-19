import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  hide = true;

  formEnd : FormGroup;

  @Output() formEmitterEnd = new EventEmitter()

  constructor(private formBuilder : FormBuilder) {

    this.formEnd = this.formBuilder.group({

      email : ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required, Validators.minLength(6)]],
      repeteSenha : ['', [Validators.required, Validators.minLength(6)]]

    })
   }

  ngOnInit(): void {
  }

  matchingPasswords(group: FormGroup) {
    if (group) {
      const senha = group.controls['senha'].value;
      const repeteSenha = group.controls['repeteSenha'].value;
      if (senha == repeteSenha) {
        return null;
      }
    }
    return{ matching: false}
  }

  formEndEmitter(){
    console.log(this.formEnd.value)
    this.formEmitterEnd.emit(this.formEnd.value)
  }

}
