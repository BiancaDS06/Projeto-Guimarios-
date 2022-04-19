import { FirestoreService } from './../Services/firestore.service';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginGuimariosComponent } from './login-guimarios/login-guimarios.component';
import { RegisterComponent } from './register/register.component';
import { AddressComponent } from './register/address/address.component';
import { EndComponent } from './register/end/end.component';
import { PersonaComponent } from './register/persona/persona.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../core/guards/auth-guard';
import { NgxMaskModule } from 'ngx-mask';


@NgModule ({
  declarations: [LoginGuimariosComponent, RegisterComponent, AddressComponent, EndComponent, PersonaComponent, DashboardComponent],
  imports: [
    AuthRoutingModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  exports: [],
  providers: [
    AuthGuard,
    FirestoreService
  ]
})
export class AuthModule {

}
