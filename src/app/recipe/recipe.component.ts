import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  ingredientInput: string;
  newName: string;
  newInstruction: string;


  constructor(private activeRoute: ActivatedRoute, private _recipes: RecipesService){}

  recipes = [];
  id: number;

  ngOnInit() {
      this.id = this.activeRoute.snapshot.params['id'];
      this._recipes.recipe.subscribe(res => this.recipes = res);
      console.log(this.recipes[this.id]);
  }

  addIngredient() {
    this.recipes[this.id].ingredients.push(this.ingredientInput)
  }

  changeRecipeName(newName) {
    this.recipes[this.id].name = newName
  }

  addInstruction(newInstruction) {
    console.log(newInstruction)
    console.log(this.recipes[this.id].instructions)
    this.recipes[this.id].instructions.push( newInstruction)
  }

  removeIngredient(i) {
    this.recipes[this.id].ingredients.splice(i,1)
  }

  removeInstruction(i) {
    this.recipes[this.id].instructions.splice(i,1)
  }

}
