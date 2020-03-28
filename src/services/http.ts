import _ from 'lodash';

export enum HttpMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT'
}

interface FetchInterface {
  method: HttpMethods;
  url: string;
  extraHeaders?: any;
  body?: any;
  queryParamsObject?: any;
  avoidJsonParse?: boolean;
}

export async function get(url: string, extraHeaders?: object): Promise<any> {
  return await performFetch({method: HttpMethods.GET, url, extraHeaders});
}

export async function getWithoutParse(url: string, extraHeaders?: object): Promise<any> {
  return await performFetch({method: HttpMethods.GET, url, extraHeaders, avoidJsonParse: true});
}

export async function getWithParams(url: string, queryParams: object, extraHeaders?: object): Promise<any> {
  return await performFetch({method: HttpMethods.GET, url, extraHeaders, queryParamsObject: queryParams});
}

export async function post(url: string, extraHeaders: object, body: object): Promise<any> {
  return await performFetch({method: HttpMethods.POST, url, extraHeaders, body});
}

export async function put(url: string, extraHeaders: object, body: object): Promise<object> {
  return await performFetch({method: HttpMethods.PUT, url, extraHeaders, body});
}

async function performFetch(fetchObject: FetchInterface): Promise<object> {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const response = await fetch(fetchObject.url, {
    method: fetchObject.method,
    headers: _.merge(headers, fetchObject.extraHeaders),
    body: JSON.stringify(fetchObject.body)
  });

  if (fetchObject.avoidJsonParse) {
    return response;
  }

  if (!response.ok) {
    throw new HttpError(`failed for ${fetchObject.url}, status ${response.status}`, response.status);
  }

  return await response.json();
}

export class HttpError extends Error {
  status: string;

  constructor(message: any, status: any) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}
