import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent implements OnInit {
  
  routeGroup = new FormGroup({
    route: new FormControl(''),
    type: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  
  
  onSubmit() {
    console.group("%c Custom log:", "background: lightgreen; color: orange; font-size: 16px;");
    console.log(this.routeGroup);
    console.groupEnd();
  }

}
