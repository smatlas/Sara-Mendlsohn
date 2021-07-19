import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { HttpRequestModel } from 'types';
import { Observable } from 'rxjs';

import { ConfigurationService } from './configuration.service';

@Injectable()
export abstract class HttpServiceBase {


  index = 0;
  constructor(
    protected http: HttpClient,
    protected config: ConfigurationService,
  ) { 
     
  }

  // get$<T = string>(httpRequest: HttpRequestModel): Observable<T> {

  //   if (httpRequest.isText) { return this._get$(httpRequest); }

  //   return this.http.get<T>(httpRequest.fullUrl, { params: { ...httpRequest.fullParams } });
  // }

  // delete$<T = string>(httpRequest: HttpRequestModel): Observable<T> {

  //   return this.http.delete<T>(httpRequest.fullUrl, { params: { ...httpRequest.fullParams } });
  // }

  post$<T = string>(httpRequest: HttpRequestModel): Observable<T> {
    console.log(httpRequest)
    if (httpRequest.isText) { return this._post$(httpRequest); }
    return this.http.post<T>(httpRequest.fullUrl, httpRequest.body,
      { headers: httpRequest.headers, params: { ...httpRequest.fullParams } });
  }

  request$(httpRequest: HttpRequestModel): Observable<HttpResponse<any>> {
    return this.http.request(
      'GET',
      httpRequest.fullUrl,
      {
        params: { ...httpRequest.fullParams },
        observe: 'response',
        responseType: 'blob',

      });
  }

  requestPost$(httpRequest: HttpRequestModel): Observable<HttpResponse<any>> {
    return this.http.request(
      'POST',
      httpRequest.fullUrl,
      {

        body: { ...httpRequest.body },
        params: { ...httpRequest.fullParams },
        observe: 'response',
        responseType: 'blob',

      });
  }

  private _get$(httpRequest: HttpRequestModel): Observable<any> {
    return this.http.get(httpRequest.fullUrl, { params: { ...httpRequest.fullParams }, responseType: 'text' });
  }

  private _post$(httpRequest: HttpRequestModel): Observable<any> {
    return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: { ...httpRequest.fullParams }, responseType: 'text' });
  }

}
