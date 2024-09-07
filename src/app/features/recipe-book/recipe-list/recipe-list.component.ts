import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://yt3.ggpht.com/a/AATXAJzR5IFcMYO3TMWMxYAfceS6zUBb-vOE5vbRyg=s900-c-k-c0xffffffff-no-rj-mo'
    ),
    new Recipe(
      'Another Recipe',
      'This is simply a test',
      'https://yt3.ggpht.com/a/AATXAJzR5IFcMYO3TMWMxYAfceS6zUBb-vOE5vbRyg=s900-c-k-c0xffffffff-no-rj-mo'
    ),
  ];

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
