import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Hamburger',
      'Hamburger - good',
      'https://avatars.mds.yandex.net/get-entity_search/517208/916628875/S600xU_2x',
      [
        new Ingredient('Burger Bun', 2),
        new Ingredient('Beef Cutlet', 1),
        new Ingredient('Cheese', 2),
        new Ingredient('Ketchup', 1),
      ]
    ),
    new Recipe(
      2,
      'Salad',
      'Salad - also good',
      'https://media.leverans.ru/product_images_inactive/irkutsk/zodiak/1498358798_salat-iz-svezhih-ovoschey.jpg',
      [new Ingredient('Cucumber', 3), new Ingredient('Tomato', 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes.find((x) => x.id === id)!;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
