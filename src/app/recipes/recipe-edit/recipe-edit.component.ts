import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  mode: boolean;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.mode = params['id'] != null;
        console.log(this.mode);
      }
    );
  }
  onSubmit() {

  }
  onCancel() {

  }
}
