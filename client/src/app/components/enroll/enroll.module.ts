import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollComponent } from './enroll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildModule } from '../child/child.module';
import {  RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../../material.module';
import { EnumValuePipe } from './pipes/enum-value.pipe'; 
 
const routes:Routes=[{
  path:'',component:EnrollComponent
}]
@NgModule({
  declarations: [
    EnrollComponent,
    EnumValuePipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ChildModule,
    AngularMaterialModule, 

  ],
  exports:[EnrollComponent]
})
export class EnrollModule { }
