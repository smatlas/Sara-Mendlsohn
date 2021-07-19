import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpPersonService } from 'projects/api/src/lib/services/http-person.service';
import { HMO } from 'projects/types/src/public_api';
import { tap } from 'rxjs/operators';
import { GetEnrollerService } from 'src/app/services/get-enroller.service';
import { IdValidators } from '../validators/idvalidator';
import { ExcelServiceService } from './services/excel-service.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss'],
},
)
export class EnrollComponent implements OnInit {
  enrollerKey: string = 'enroller'
  formGroup: FormGroup = new FormGroup({})
  HMO = HMO
  mouseoverLogin: boolean = false
  childrenList: any[] = [];
  kindOptions: string[] = ['זכר', 'נקבה']

  constructor(private formBuilder: FormBuilder,
    private httpPerson: HttpPersonService,
    private getEnroller: GetEnrollerService, private excelHttp: ExcelServiceService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstName: new FormControl('', [Validators.pattern(/^[a-z\u0590-\u05fe]+$/i)]),
      LastName: new FormControl('', [Validators.pattern(/^[a-z\u0590-\u05fe]+$/i)]),
      ID: new FormControl('', [Validators.pattern(/^[0-9]{9}$/), IdValidators.isValidIsraeliID]),
      birthDate: new FormControl('',),
      kind: new FormControl('',),
      HMO: new FormControl(''),
      Children: this.formBuilder.array([])
    });
    this.formGroup.valueChanges.pipe(
      tap(_ => this.saveNameToRules())
    ).subscribe();
    const enroller = this.getEnroller.getEnroller();
    this.formGroup.setValue(enroller)
  }

  enroll() {
    let bd = this.formGroup.controls['birthDate'].value
    this.formGroup.controls['birthDate'].setValue(bd.toLocaleDateString())

console.log(this.formGroup.controls['Children'].value)


    this.httpPerson.insertPerson$(this.formGroup.value).subscribe()
    localStorage.setItem(this.enrollerKey, '')
    this.excelHttp.downloadFile({
      ...this.formGroup.value,
      Children: !this.formGroup.value.Children.length ? 'אין ילדים' : JSON.stringify(this.formGroup.value.Children)
    })
    //this.formGroup.setValue(this.getEnroller.getEnroller())
    this.formGroup.reset()
  }

  addChild() {
    this.childrenList.push({});
  }

  saveNameToRules() {
    localStorage.setItem(this.enrollerKey, JSON.stringify(this.formGroup.value))
  }  
}

