import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertsWrapperComponent } from './alerts-wrapper/alerts-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertsWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
