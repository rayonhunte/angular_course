import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../services/recipes.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Subscription } from 'rxjs';
import { reduce } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipesService: RecipesService, private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.subscription = this.recipesService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
