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
    status : '',
    created_at : '',
    updated_at : '',
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
