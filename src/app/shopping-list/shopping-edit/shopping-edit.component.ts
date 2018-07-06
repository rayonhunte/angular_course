import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient: Ingredient;
  @ViewChild('name') name: ElementRef;
  @ViewChild('amount') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.addToSHoppingList.subscribe(
      (ingredients) => {
        this.shoppingListService.addFromRecipes(ingredients);
      }
    );
  }

  add() {
    this.ingredient = {
      name: this.name.nativeElement.value,
      amount:  this.amount.nativeElement.value
    };
    this.shoppingListService.newIngredient(this.ingredient);
  }
}
