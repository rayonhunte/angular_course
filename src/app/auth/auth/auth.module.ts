import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SinginComponent } from '../../singin/singin.component';
import { SingupComponent } from '../../singup/singup.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [
    SinginComponent,
    SingupComponent
  ]
})
export class AuthModule { }
