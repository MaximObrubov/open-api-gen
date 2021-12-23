import {
  Component,
  OnInit,
} from '@angular/core';
import { RouteService } from '../route.service';
import { Route } from '../model/route';

@Component({
  selector: 'app-api-constructor',
  templateUrl: './api-constructor.component.html',
  styleUrls: ['./api-constructor.component.css']
})
export class ApiConstructorComponent implements OnInit {
  
  routes: Array<Route>;
  
  // QUESTION: why not understanding getters? I don't whant to use private props
  filterCompletedRoutes = {_isComplete: true}
  
  filterNotCompletedRoutes = {_isComplete: false}

  constructor(private routeService: RouteService) {
  }

  ngOnInit(): void {
    this.getRoutes();
  }
  
  getRoutes(): void {
    this.routeService
      .getRoutes()
      .subscribe(routes => this.routes = routes);
  }
  
  onClickAdd(): void {
    this.routes.push(new Route());
  }
  
  onClickClear(): void {
    this.routeService.clearRoutes();
  }
  
  onSubmit(): () => void {
    return () => {
      this.routeService.setRoutes(this.routes);
    }
  }

}
