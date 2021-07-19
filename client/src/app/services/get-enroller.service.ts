import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEnrollerService {

  getEnroller() {
    const enroller = localStorage.getItem('enroller')?.toString()
    if (!enroller) {
      return {
        firstName: '',
        LastName:'',
        ID: '',
        birthDate:'',
        kind:'',
        HMO:'',
        Children:[]
      }
    }
    return JSON.parse(enroller)
  }
}
