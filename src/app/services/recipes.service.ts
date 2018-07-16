import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipes: Recipe[] = [
    new Recipe (
    0,
    'Rots recipe',
    'this is a test',
    'https://s.tmimgcdn.com/blog/wp-content/uploads/2018/03/food-21.jpg?x54449',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Milk', 20)
    ]
    ),
    new Recipe (
      1,
      'Pork recipe',
      'this is a test2',
      'https://s.tmimgcdn.com/blog/wp-content/uploads/2018/03/food-21.jpg?x54449',
      [
        new Ingredient('Pork', 1),
        new Ingredient('Rice', 3)
      ]
    )
  ];


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    // return recipes array
    console.log(this.recipes);
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }


}
