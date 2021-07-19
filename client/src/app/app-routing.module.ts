import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(
   [ 
   {path:'enroll',loadChildren:()=>import('./components/enroll/enroll.module').then(m=>m.EnrollModule)},
   {path:'rules',loadChildren:()=>import('./components/rules/rules.module').then(m=>m.RulesModule)}
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
