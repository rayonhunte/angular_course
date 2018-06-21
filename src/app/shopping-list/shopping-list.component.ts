import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Sugar', 20),
    new Ingredient('Milk', 50),
  ];
  constructor() { }

  ngOnInit() {
  }

  newIngredient(newIngredient: Ingredient){
     this.ingredients.push(newIngredient);
    console.log(newIngredient);
  }

}
