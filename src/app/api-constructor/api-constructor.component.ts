import {
  Component,
  OnInit,
} from '@angular/core';
import { RouteService } from '../route.service';
import { Route } from '../model/route';
import { RouteFilterPipe } from './routeFilterPipe';

@Component({
  selector: 'app-api-constructor',
  templateUrl: './api-constructor.component.html',
  styleUrls: ['./api-constructor.component.css']
})
export class ApiConstructorComponent implements OnInit {
  
  routes: Array<Route>;
  
  completedRoutes: Array<Route>;
  
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
    this.completedRoutes = this.routes.filter(r => r.isComplete);
  }
  
  onClickAdd(): void {
    this.routes.push(new Route());
  }
  
  onClickClear(): void {
    console.group("%c Custom log:", "background: lightgreen; color: orange; font-size: 16px;");
    console.log('clear');
    console.groupEnd();
    
    this.routeService.clearRoutes();
  }
  
  onSubmit(): () => void {
    return () => {
      this.routeService.setRoutes(this.routes);
      this.completedRoutes = this.routes.filter(r => r.isComplete); 
    }
  }

}
