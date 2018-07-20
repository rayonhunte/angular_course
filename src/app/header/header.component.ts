import {Component, EventEmitter, Output} from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { AuthService } from '../services/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
@Output() featureSelected = new EventEmitter<string>();

constructor(private recipeService: RecipesService, private authService: AuthService) {}

OnSelect(feature: string) {
    this.featureSelected.emit(feature);
}

OnSaveData() {
    this.recipeService.saveRecipes().subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
    );
}

onDataFetch() {
    this.recipeService.getRecipes();
}

}

