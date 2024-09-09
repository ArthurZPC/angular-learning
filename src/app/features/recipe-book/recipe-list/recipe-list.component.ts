import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
