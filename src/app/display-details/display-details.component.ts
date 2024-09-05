import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonClickLogs } from '../button-click-logs';

@Component({
  selector: 'app-display-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css',
})
export class DisplayDetailsComponent {
  details: string = 'Ugh! What are you staring at me for?';
  showDetails: boolean = false;
  buttonClickLogs: ButtonClickLogs[] = [];

  toggleDetails(): void {
    this.showDetails = !this.showDetails;

    let lastClickCount =
      this.buttonClickLogs.length != 0
        ? this.buttonClickLogs[this.buttonClickLogs.length - 1].count
        : 0;

    this.buttonClickLogs.push({
      count: lastClickCount + 1,
      content: `Button clicks count: ${lastClickCount + 1}`,
    });
  }
}
