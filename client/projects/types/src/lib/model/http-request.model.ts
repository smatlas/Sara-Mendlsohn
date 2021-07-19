import { HttpHeaders } from '@angular/common/http';

export class HttpRequestModel {
  component!: string;
  logMessage: string | undefined;
  url: string | undefined;
  action: string | undefined;
  params: object = {};
  body: any = {};
  isText: boolean | undefined;
  headers: HttpHeaders | undefined;

  constructor(copy?: Partial<HttpRequestModel>) {
    Object.assign(this, copy);

    this.params = Object.entries(this.params)
      .filter(([, val]) => val !== null)
      .filter(([, val]) => val !== undefined)
      .reduce((state, [key, val]) => ({ ...state, [key]: val }), {});

    if (Array.isArray(this.body)) { return; }

    this.body = Object.entries(this.body)
      .filter(([, val]) => val !== null)
      .filter(([, val]) => val !== undefined)
      .reduce((state, [key, val]) => ({
        ...state, [key]: val
      }), {});

    this.body = Object.keys(this.body).length ? this.body : null;
  }

  get queryParams() {

    const result = this._queryParams(this.params);

    return /&/.test(result) ? `?${result}` : '';
  }

  private _queryParams(params: object, prefix: string = ''): string {
    const result = Object.entries(params)
      .filter(([, value]) => typeof (value) !== 'object')
      .map(([key, value]) => `${prefix}${key}=${decodeURIComponent(value)}`)
      .join('&');

    return Object.entries(params)
      .filter(([, value]) => typeof (value) === 'object')
      .map(([key, value]) => this._queryParams(value, `${key}.`))
      .concat(result)
      .join('&');
  }

  get fullUrl() { return `${this.url}${this.action}`; }

  get fullParams() {
    return this.params;
  }
}
