import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  userActivationSwitched = new EventEmitter<void>();

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.userActivationSwitched.emit();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.userActivationSwitched.emit();
  }
}
