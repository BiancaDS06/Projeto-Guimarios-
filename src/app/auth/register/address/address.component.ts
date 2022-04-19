import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  formAddress : FormGroup;

  @Output() formEmitterAddress = new EventEmitter()

  constructor(private formBuilder : FormBuilder) {
    this.formAddress = this.formBuilder.group({

      rua : ['', [Validators.required]],
      complemento : ['', [Validators.required]],
      bairro : ['', [Validators.required]],
      cidade : ['', [Validators.required]],
      numero : ['', [Validators.required]],
      estado : ['', [Validators.required]]

    })
  }

  ngOnInit(): void {
  }

  formAddressEmitter(){
    console.log(this.formAddress.value)
    this.formEmitterAddress.emit(this.formAddress.value)
  }

}
