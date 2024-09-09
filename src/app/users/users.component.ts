import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];
}
