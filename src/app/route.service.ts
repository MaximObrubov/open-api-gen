import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Route } from './model/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  
  LS_KEY: string = 'open-api-gen-ls';
  
  private routesChange: Subject<Route[]> = new Subject<Route[]>();
  
  private _routes: Route[];

  constructor() {
    if (!this.isLsAvailable()) throw new Error('Local Storage is not available');
    
    setTimeout(() => {
      this._routes = this._routes
        || JSON.parse(localStorage.getItem(this.LS_KEY) || '{}')?.routes as Route[]
        || [];
      this.routesChange.next(this._routes);
    }, 0);
  }
  
  get routesObservable() {
    return this.routesChange;
  }
  
  setRoutes(routes: Route[]): void {
    this.routesChange.next(routes);
    this._routes = routes;
    localStorage.setItem(this.LS_KEY, JSON.stringify({ routes }));
  }
  
  clearRoutes() {
    this._routes = [];
    this.routesChange.next(this._routes);
    localStorage.removeItem(this.LS_KEY);
  }
  
  
  private isLsAvailable() {
    const TEST = 'test';
    try {
      localStorage.setItem(TEST, TEST);
      localStorage.removeItem(TEST);
      return true;
    } catch(e) {
      return false;
    }
  }
}
