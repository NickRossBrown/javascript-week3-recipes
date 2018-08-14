import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class RecipesService {

  private recipes = new BehaviorSubject<any>([{'name':'sandwich',ingredients:['a','b'],'instructions':[]}, {'name':'avacado',ingredients:['a','b'],'instructions':[]}]);
  recipe = this.recipes.asObservable();

  constructor() { }

  save(recipe) {
    this.recipes.next(recipe);
  }


}
