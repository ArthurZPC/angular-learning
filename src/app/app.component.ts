import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
}
