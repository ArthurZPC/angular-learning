import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class CounterService {
  counter = 0;

  constructor(private userService: UserService) {
    userService.userActivationSwitched.subscribe(() => {
      this.count();
      this.logCount();
    });
  }

  count() {
    this.counter++;
  }

  logCount() {
    console.log(`Count: ${this.counter}`);
  }
}
