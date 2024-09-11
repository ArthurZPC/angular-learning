import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
