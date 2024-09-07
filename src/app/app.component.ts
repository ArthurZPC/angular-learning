import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { CommonModule } from '@angular/common';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GameControlComponent,
    OddComponent,
    CommonModule,
    EvenComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameTickCompleted(number: number) {
    if (number % 2 == 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }

  onGameStopped() {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
}
