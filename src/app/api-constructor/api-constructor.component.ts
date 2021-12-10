import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ComponentFactory
} from '@angular/core';

@Component({
  selector: 'app-api-constructor',
  templateUrl: './api-constructor.component.html',
  styleUrls: ['./api-constructor.component.css']
})
export class ApiConstructorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onClickAdd(): void {
    console.group("%c Custom log:", "background: lightgreen; color: orange; font-size: 16px;");
    console.log("here");
    console.groupEnd();
  }
  
  // createComponent(type) {
  //   this.container.clear();
  //   const factory: ComponentFactory = this.resolver.resolveComponentFactory(AlertComponent);
  //   this.componentRef: ComponentRef = this.container.createComponent(factory);
  // }

}
