import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() clickedRecipe = new EventEmitter<Recipe>();
  recipe: Recipe;

  recipes: Recipe[] = [
    new Recipe(
    'test recipe',
    'this is a test',
    'https://get.pxhere.com/photo/dish-meal-food-green-mediterranean-vegetable-recipe-healthy-snack-cuisine-food-photography-zucchini-vegetarian-food-delicious-food-rosemary-appetizer-plated-food-beautiful-food-zucchini-wraps-zucchini-slices-fish-fillet-recipe-fish-recipes-1376204.jpg'),
    new Recipe(
      'test recipe',
      'this is a test2',
      'https://get.pxhere.com/photo/dish-meal-food-green-mediterranean-vegetable-recipe-healthy-snack-cuisine-food-photography-zucchini-vegetarian-food-delicious-food-rosemary-appetizer-plated-food-beautiful-food-zucchini-wraps-zucchini-slices-fish-fillet-recipe-fish-recipes-1376204.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onItemClick(recipe) {
    this.clickedRecipe.emit(recipe);
  }
}
