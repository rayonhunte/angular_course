import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipes.component';
import { RecipesStartComponent } from '../recipes-start/recipes-start.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { AuthGuardGuard } from '../../services/auth-guard.guard';
import { RecipesDetailComponent } from '../recipes-detail/recipes-detail.component';

const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
  {path: '', component: RecipesStartComponent},
  {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardGuard]},
  {path: ':id', component: RecipesDetailComponent},
  {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardGuard]},
]}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
