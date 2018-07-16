import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService,
    private recipesService: RecipesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipesService.getRecipeById(+params['id']);
      }
    );
  }

  sendDetails() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
