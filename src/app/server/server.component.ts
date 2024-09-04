import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }
}
