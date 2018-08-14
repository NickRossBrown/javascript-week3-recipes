import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes = [];

  recipeInput: string;

  constructor(private _recipes: RecipesService) { }

  ngOnInit() {
    this._recipes.recipe.subscribe(res => this.recipes = res);
    console.log(Object.keys(this.recipes));
  }

  add() {
    this.recipes.push({name:this.recipeInput,ingredients:[], instructions:[]});
    this.recipeInput= '';
    this._recipes.save(this.recipes);
  }

}
