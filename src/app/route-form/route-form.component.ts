import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouteEntityTypes, Route } from '../model/route';
import { QueryParameter } from '../model/query-parameter';


@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent implements OnInit {
  
  @Input() route: Route;
  
  @Input() onSubmitCallback: () => void;
  
  routeGroup = new FormGroup({
    route: new FormControl('', Validators.required,),
    type: new FormControl(''),
  });
  
  types = Object.keys(RouteEntityTypes);
  
  constructor() {
  }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.route.isComplete = true;
  
    if (typeof this.onSubmitCallback === 'function') this.onSubmitCallback();
  }
  
  onAddParam(e: Event): void {
    e.preventDefault();
    this.route.parameters.push(new QueryParameter())
  }

}
