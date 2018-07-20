import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map, catchError} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private slService: ShoppingListService, private http: Http, private authService: AuthService) { }

  // getRecipes() {
  //   // return recipes array
  //   console.log(this.recipes);
  //   return this.recipes.slice();
  // }

  getRecipeById(id: number) {
    return this.recipes.find(x => x.id === +id);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    const index = this.recipes.findIndex(x => x.id === +id);
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

 deleteRecipe(id: number) {
   const recipeObj = this.recipes.find(x => x.id === +id);
   this.recipes = this.recipes.filter(obj => obj !== recipeObj);
   this.recipesChanged.next(this.recipes.slice());
 }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  saveRecipes() {
    const token = this.authService.getToken();
    console.log(token);
    return this.http.put('https://udemy-temp.firebaseio.com/recipeData.json?auth=' + token, this.recipes);
  }

  getRecipes() {
    const token = this.authService.token;
    console.log(token);
    this.http.get('https://udemy-temp.firebaseio.com/recipeData.json?auth=' + token).pipe(map(
      (res: Response) => {
        const recipes: Recipe[] = res.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )).subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes);
      }
    );
  }


}
