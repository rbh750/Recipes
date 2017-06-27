import { AuthService } from './../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeServise: RecipeService, private authService: AuthService) { }

    // No need to subscribe here as the caller (heard component) will subscribe in order to log the response to the console
    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-ea063.firebaseio.com/recipes.json?auth=' + token, this.recipeServise.getRecipes());
    }

    // Subscribe here as the goal is to update the recipes so they can be displayed
    // The map method is used to return a new array if the propery ingredients is missing,
    // in this case an empty string is assigned.
    // The map() method creates a new array with the results of calling a function for every array element.
    getRecipes() {
        const token = this.authService.getToken();

        this.http.get('https://ng-recipe-book-ea063.firebaseio.com/recipes.json?auth=' + token)
            .map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
            )
            .subscribe(
            (recipes: Recipe[]) => {
                this.recipeServise.setRecipes(recipes);
            }
            );
    }
}