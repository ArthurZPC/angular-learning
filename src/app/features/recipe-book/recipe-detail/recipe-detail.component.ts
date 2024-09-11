import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      (paramMap) =>
        (this.recipe = this.recipeService.getRecipeById(+paramMap.get('id')!))
    );
  }

  onIngredientsAdded() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
