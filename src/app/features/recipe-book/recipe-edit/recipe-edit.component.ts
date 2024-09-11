import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent {
  id!: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id')!;
      this.editMode = paramMap.has('id');
    });
  }
}
