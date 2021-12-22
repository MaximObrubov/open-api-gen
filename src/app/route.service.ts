import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Route } from './model/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  
  routes: Route[];

  constructor() {
    this.routes = [];
  }
  
  getRoutes(): Observable<Route[]> {
    return of(this.routes);
  }
}
