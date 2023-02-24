import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail-update',
  templateUrl: './employee-detail-update.component.html',
  styleUrls: ['./employee-detail-update.component.css']
})
export class EmployeeDetailUpdateComponent {
  public id:any;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
