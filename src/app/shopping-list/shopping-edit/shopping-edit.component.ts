import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  ingredient: Ingredient;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.ingredient = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          ...this.ingredient
        });
      }
    );
  }


  onSubmit(form: NgForm) {
   const {name, amount} = form.value;
    this.ingredient = {
      name,
      amount
    };
    if (this.editMode) {
      this.shoppingListService.editIngredient(this.ingredient, this.editItemIndex);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(this.ingredient);
    }
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearForm() {
    this.slForm.reset();
    this.editMode = false;
  }
  deleteIngredient() {
    const index = this.editItemIndex;
    this.shoppingListService.deleteIngredient(index);
    this.clearForm();
  }
}
