import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe (
    'Rots recipe',
    'this is a test',
    'https://s.tmimgcdn.com/blog/wp-content/uploads/2018/03/food-21.jpg?x54449',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Milk', 20)
    ]
    ),
    new Recipe (
      'Pork recipe',
      'this is a test2',
      'https://s.tmimgcdn.com/blog/wp-content/uploads/2018/03/food-21.jpg?x54449',
      [
        new Ingredient('Pork', 1),
        new Ingredient('Rice', 3)
      ]
    )
  ];


  constructor() { }

  getRecipes() {
    // return recipes array
    console.log(this.recipes);
    return this.recipes.slice();
  }
}
