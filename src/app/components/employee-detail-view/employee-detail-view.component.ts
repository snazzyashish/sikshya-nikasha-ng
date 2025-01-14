import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html',
  styleUrls: ['./employee-detail-view.component.css']
})
export class EmployeeDetailViewComponent {
  public id:any;
  public record:any = {};
  constructor(public route:ActivatedRoute, public api:ApiService){
    this.id = this.route.snapshot.paramMap.get('id'); 
    this.getViewRecord();
  }

  getViewRecord(){
    let params = {
      id : this.id
    }
    this.api.viewEmployee(params).subscribe(res=>{
      this.record = res.data;
    })
  }
}
