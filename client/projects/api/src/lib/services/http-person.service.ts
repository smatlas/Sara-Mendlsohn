import { Injectable } from '@angular/core';
import { HttpRequestModel, IPerson } from 'types';
import { HttpServiceBase } from './http-service.base';

@Injectable({  providedIn: 'root'})
export class HttpPersonService  extends HttpServiceBase{
private options  ={Headers:{'Content-Type':'appllication/json'}}
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}/api/Save/`;
  }

  
  insertPerson$(person: IPerson) {  
    return this.post$(new HttpRequestModel({
      //url:this._serverUrl,
      url: 'http://localhost:44365/api/Save/',
      action: 'AddPerson',
      body: person
    }));
  }
}
