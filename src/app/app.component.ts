import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub!: Subscription;

  constructor(private userService: UserService) {}

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (x) => (this.userActivated = x)
    );
  }
}
