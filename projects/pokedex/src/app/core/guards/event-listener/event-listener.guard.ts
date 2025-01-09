import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventListenerService } from '../../services/event-listener/event-listener.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class EventListenerGuard implements CanActivate {
  constructor(private eventListenerService: EventListenerService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.eventListenerService.listenToEvent('pokemon.type.selected');
    return true;
  }
}
