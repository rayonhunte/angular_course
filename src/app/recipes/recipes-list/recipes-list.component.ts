import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../../services/recipes.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService, private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
