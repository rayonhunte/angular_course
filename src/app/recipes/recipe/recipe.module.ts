import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipes.component';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { RecipesDetailComponent } from '../recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from '../recipes-list/recipes-item/recipes-item.component';
import { RecipesStartComponent } from '../recipes-start/recipes-start.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';
import { RecipesRoutingModule } from '../recipes-routing/recipes-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipesStartComponent,
    RecipeEditComponent,
  ]
})
export class RecipeModule { }
