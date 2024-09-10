import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  standalone: true,
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const serverId = this.route.snapshot.paramMap.get('id');
    this.server = this.serversService.getServer(Number(serverId))!;
    this.route.paramMap.subscribe((paramMap) => {
      this.server = this.serversService.getServer(Number(paramMap.get('id')))!;
    });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParams: { allowEdit: 1 },
    });
  }
}
