import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ComponentFactory
} from '@angular/core';

import { Route } from '../model/route';

@Component({
  selector: 'app-api-constructor',
  templateUrl: './api-constructor.component.html',
  styleUrls: ['./api-constructor.component.css']
})
export class ApiConstructorComponent implements OnInit {
  
  routes: Array<Route> = [];
  
  filterCompletedRoutes = {isComplete: true}
  
  filterNotCompletedRoutes = {isComplete: false}

  constructor() {
  }

  ngOnInit(): void {
  }
  
  onClickAdd(): void {
    this.routes.push(new Route());
  }
  
  onSubmit(): void {
    console.group("%c Custom log:", "background: lightgreen; color: orange; font-size: 16px;");
    console.log(this.routes);
    console.groupEnd();
  }

}
