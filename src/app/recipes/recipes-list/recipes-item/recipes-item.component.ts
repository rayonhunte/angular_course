import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() clickedRecipe = new EventEmitter<void>();
  constructor() { }

  recipeItem(recipe) {
    this.clickedRecipe.emit();
  }

  ngOnInit() {
  }

}
