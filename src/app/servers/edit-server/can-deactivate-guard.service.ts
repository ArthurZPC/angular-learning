import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => MaybeAsync<GuardResult>;
}

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return component.canDeactivate();
  }
}
