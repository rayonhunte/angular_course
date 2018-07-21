import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupComponent } from '../../singup/singup.component';
import { SinginComponent } from '../../singin/singin.component';

const routes: Routes = [
  {path: 'signup', component: SingupComponent},
  {path: 'login', component: SinginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
