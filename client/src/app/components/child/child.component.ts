import { Component, Injectable, Input, OnInit, Optional, Self } from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { IdValidators } from '../validators/idvalidator';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],


})
@Injectable()
export class ChildComponent implements OnInit {

  check = true

  childGroup: FormGroup = new FormGroup({});
  @Input() formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.childGroup = this.formBuilder.group({
      name: new FormControl('', Validators.pattern(/^[a-z\u0590-\u05fe]+$/i)),
      ID: new FormControl('',[ Validators.pattern(/^[0-9]{9}$/),IdValidators.isValidIsraeliID]),
      birthDate: new FormControl(''),
    });

    (this.formGroup.get('Children') as FormArray).push(this.childGroup)
    console.log(this.formGroup.value.birthDate);

  }

}