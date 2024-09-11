import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingEditComponent } from '../shopping-edit/shopping-edit.component';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  ingredientsChangedSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangedSub =
      this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => (this.ingredients = ingredients)
      );
  }

  ngOnDestroy() {
    this.ingredientsChangedSub.unsubscribe();
  }
}
