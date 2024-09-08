import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

  logAccountCreation(name: string, status: string) {
    console.log(
      `A server was created with name "${name}" and status - ${status}`
    );
  }
}
