import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  addIngredient = new EventEmitter<Ingredient[]>();
  addToSHoppingList = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Sugar', 20),
    new Ingredient('Milk', 50),
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addFromRecipes(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  newIngredient(newIngredient: Ingredient) {
   this.ingredients.push(newIngredient);
   this.addIngredient.emit(this.ingredients);
 }
}
