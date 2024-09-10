import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  GuardResult,
  MaybeAsync,
  Router,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.allowEdit = queryParamMap.get('allowEdit') === '1';
    });

    this.route.paramMap.subscribe((paramMap) => {
      const id = +paramMap.get('id')!;
      this.server = this.serversService.getServer(id)!;
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): MaybeAsync<GuardResult> {
    if (!this.allowEdit) {
      return true;
    }

    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes?');
    }

    return true;
  }
}
