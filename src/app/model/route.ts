export enum RouteEntityTypes {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
  PATCH = "PATCH",
}

/**
 * represents an route in scheme
 * @param type        - request type
 * @param url         - request path
 * @param parameters  - query parameters
 * @param body        - request body
 */
export class Route {
  
  id: number;
  
  type?: RouteEntityTypes;
  
  url?: string;
  
  parameters?: Array<any>;
  
  body?: object;
  
  private _isComplete: boolean = false;
    
  constructor(type?: RouteEntityTypes, url?: string, parameters?: Array<any>, body?: object) {
    // TODO: dynamic id creation
    this.id = 1;
    this.type = type;
    this.url = url;
    this.parameters = parameters;
    this.body = body;
  }
  
  set isComplete(value: boolean) {
    this._isComplete = value;
  }
  
  get isComplete() {
    return this._isComplete;
  }
  
}
