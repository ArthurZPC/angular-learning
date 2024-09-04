import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent, FormsModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(): void {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
