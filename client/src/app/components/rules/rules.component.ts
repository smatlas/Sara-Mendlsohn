import { Component, OnInit } from '@angular/core';
import { GetEnrollerService } from 'src/app/services/get-enroller.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  welcome: string = 'שלום'

  constructor(private getEnroller: GetEnrollerService) {

    const enroller = this.getEnroller.getEnroller()
    if (enroller && enroller.LastName && enroller.firstName) {
      this.welcome += ` ${enroller.firstName} ${enroller.LastName}`
    }
  }
  ngOnInit(): void {

  }

}
