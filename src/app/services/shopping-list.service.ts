import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Sugar', 20),
    new Ingredient('Milk', 50),
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient) {
   this.ingredients.push(newIngredient);
   this.ingredientsChanged.next(this.ingredients.slice());
 }

 addIngredients(ingredients: Ingredient[]) {
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.ingredients.slice());
}

 editIngredient(ingredient: Ingredient, index: number) {
   this.ingredients[index] = ingredient;
   this.ingredientsChanged.next(this.ingredients.slice());
 }

 deleteIngredient(index: number) {
   this.ingredients.splice(index, 1);
   this.ingredientsChanged.next(this.ingredients.slice());
 }
}
