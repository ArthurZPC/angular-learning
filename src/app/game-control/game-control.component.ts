import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() gameInProgress = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter();
  currentNumber = 0;

  private gameInterval: any;

  onGameStart() {
    if (!this.gameInterval) {
      this.gameInterval = setInterval(() => {
        this.currentNumber++;
        this.gameInProgress.emit(this.currentNumber);
      }, 1000);
    }
  }

  onGameStop() {
    clearInterval(this.gameInterval);
    this.currentNumber = 0;
    this.gameInterval = null;
    this.gameStopped.emit();
  }
}
