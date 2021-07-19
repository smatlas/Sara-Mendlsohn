import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IpConfig } from 'types';
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  
  ips: IpConfig = {};
  
  constructor(
    private http: HttpClient) {
  }

  initConfiguration(path: any) :Promise<any>{    
   
    return combineLatest(
      this.http.get<IpConfig>(`${path}/ipConfig.json`),
    ).pipe(
      tap(response => [this.ips] = response,
       tap(_=>console.log('AAAAA', this.ips))
     ),
      
    ).toPromise();
  }
}