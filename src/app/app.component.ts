import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    CockpitComponent,
    ServerElementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Test Server', content: 'Just a test!' },
  ];
}
