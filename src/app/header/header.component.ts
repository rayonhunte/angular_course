import {Component, EventEmitter, Output} from '@angular/core';
import { RecipesService } from '../services/recipes.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
@Output() featureSelected = new EventEmitter<string>();

constructor(private recipeService: RecipesService) {}

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

