import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { CommonModule } from '@angular/common';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [CommonModule, EditServerComponent, ServerComponent],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    this.router.navigate(['/servers']);
  }
}
