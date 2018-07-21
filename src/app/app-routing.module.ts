import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
    // {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: '../app/recipes/recipe/recipe.module#RecipeModule'},
    {path: 'shopping-list', component: ShoppingListComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
