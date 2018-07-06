import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'shopping-list', component: ShoppingListComponent, children: [
        {path: ':id', component: ShoppingEditComponent}
    ]},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipesStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipesDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent},
    ]}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
