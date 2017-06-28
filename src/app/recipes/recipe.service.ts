import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Skewers',
            'Food on the stick is great for the grill!',
            'http://www.rattlerwellness.com/wp-content/uploads/2013/07/kabobs-719954.jpg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Chicken', 1),
                new Ingredient('Veggies', 3)
            ]
        ),
        new Recipe(
            'Beef tacos',
            'Traditional Mexican dish.',
            'https://www.deltaco.com/files/menu/item/flatbreadtaco.png',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Taco shells', 2),
                new Ingredient('Cheese', 1),
                new Ingredient('Tomato', 1)
            ]
        ),
        new Recipe(
            'Garlic Lemon Butter Sauce pasta',
            'Delicious Italian food.',
            'http://www.cookingclassy.com/wp-content/uploads/2012/11/browned+butter+lemon+pasta3.jpg',
            [
                new Ingredient('Espagueti (grm)', 500),
                new Ingredient('Garlic', 1),
                new Ingredient('Butter (grm)', 100),
                new Ingredient('Cheese', 1)]
        )
    ];

    constructor(private slService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}