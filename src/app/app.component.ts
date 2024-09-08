import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountComponent, NewAccountComponent, CommonModule],
  providers: [AccountsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
