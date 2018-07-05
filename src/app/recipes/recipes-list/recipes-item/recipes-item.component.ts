import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor( private recipeService: RecipesService ) { }

  recipeItem(recipe) {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

  ngOnInit() {
  }

}
