import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Route } from './model/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  
  LS_KEY: string = 'open-api-gen-ls';
  
  routes: Route[];

  constructor() {
    if (!this.isLsAvailable()) throw new Error('Local Storage is not available');
  }
  
  getRoutes(): Observable<Route[]> {
    return of(
      this.routes
      || JSON.parse(localStorage.getItem(this.LS_KEY) || '{}')?.routes as Route[]
      || []
    );
  }
  
  setRoutes(routes: Route[]): void {
    this.routes = routes;
    localStorage.setItem(this.LS_KEY, JSON.stringify({ routes }));
  }
  
  clearRoutes() {
    // QUESTION: why not rerenders?
    this.routes = [];
    localStorage.removeItem(this.LS_KEY);
  }
  
  
  private isLsAvailable() {
    const test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }
}
