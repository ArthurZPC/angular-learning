import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayDetailsComponent } from './display-details/display-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
