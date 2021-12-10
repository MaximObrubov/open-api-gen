export enum RequesEntityType {
  GET,
  POST,
  DELETE,
  PUT,
  PATCH,
}

export interface RequstEntity {
  type: RequesEntityType,
  url: string,
  parameters: Array<any>,
  body: object
}
