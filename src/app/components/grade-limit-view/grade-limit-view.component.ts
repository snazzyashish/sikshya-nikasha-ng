import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grade-limit-view',
  templateUrl: './grade-limit-view.component.html',
  styleUrls: ['./grade-limit-view.component.css']
})
export class GradeLimitViewComponent {
  public id:any;
  public record:any = {
    level : '',
    position : '',
    gradelimit : '',
    status : '1',
    created_at : '0000-00-00 00:00:00',
    updated_at : '2020-06-09 12:16:12',
  }
  constructor(public route:ActivatedRoute, public api:ApiService){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewData();
  }

  getViewData(){
    let params = {
      id : this.id
    }
    this.api.viewEmployeeGradeLimit(params).subscribe(res=>{
      this.record = res.data;
    })
  }
}
