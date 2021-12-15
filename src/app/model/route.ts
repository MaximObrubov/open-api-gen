export enum RouteEntityType {
  GET,
  POST,
  DELETE,
  PUT,
  PATCH,
}


export class Route {
  
  type?: RouteEntityType;
  
  url?: string;
  
  parameters?: Array<any>;
  
  body?: object;
    
  constructor(type?: RouteEntityType, url?: string, parameters?: Array<any>, body?: object) {
    this.type = type;
    this.url = url;
    this.parameters = parameters;
    this.body = body;
  }
  
}
