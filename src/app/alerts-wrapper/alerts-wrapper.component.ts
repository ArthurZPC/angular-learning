import { Component } from '@angular/core';
import { WarningAlertComponent } from '../warning-alert/warning-alert.component';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';

@Component({
  selector: 'app-alerts-wrapper',
  standalone: true,
  imports: [WarningAlertComponent, SuccessAlertComponent],
  templateUrl: './alerts-wrapper.component.html',
  styleUrl: './alerts-wrapper.component.css',
})
export class AlertsWrapperComponent {}
