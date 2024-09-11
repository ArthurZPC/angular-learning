import { Routes } from '@angular/router';
import { ShoppingListComponent } from './features/shopping-list/shopping-list/shopping-list.component';
import { RecipesComponent } from './features/recipe-book/recipes/recipes.component';
import { RecipeDetailComponent } from './features/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './features/recipe-book/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './features/recipe-book/recipe-start/recipe-start.component';

export const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'recipe',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: '**', redirectTo: 'recipe' },
];
