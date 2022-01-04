import { Component, OnInit } from '@angular/core';
import { Route } from '../model/route';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  routes: Array<Route>;
  
  json: string;
  
  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
    this.routeService.routesObservable.subscribe((routes) => {
      this.routes = routes;
      this.json = JSON.stringify(this.routes, null, "\n");
    });
  }
}
