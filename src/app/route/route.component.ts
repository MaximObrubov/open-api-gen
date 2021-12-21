import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../model/route';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  @Input() route: Route;

  constructor() { }

  ngOnInit(): void {
  }

}
