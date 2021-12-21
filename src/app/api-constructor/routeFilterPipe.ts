import { Pipe, PipeTransform } from '@angular/core';
import { Route } from '../model/route';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
*/
@Pipe({
    name: 'routeFilter',
    pure: false
})
export class RouteFilterPipe implements PipeTransform {
  transform(routes: Route[], filter: {[filter: string]: any}): any {
    if (!routes || !filter) return routes;

    const r =  routes.filter((route: Route) => {
      return Object.keys(filter).every((key) => route[key as keyof Route] === filter[key]);
    });
    return r;
  }
}
