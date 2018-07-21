import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from '../shopping-list.component';
import { ShoppingEditComponent } from '../shopping-edit/shopping-edit.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SharedModule } from '../../shared/shared/shared.module';
import { ShoppingRoutingModule } from '../shopping/shopping-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ShoppingRoutingModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ]
})
export class ShoppingListModule { }
