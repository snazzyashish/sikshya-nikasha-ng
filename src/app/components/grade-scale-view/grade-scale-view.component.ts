import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-grade-scale-view',
  templateUrl: './grade-scale-view.component.html',
  styleUrls: ['./grade-scale-view.component.css']
})
export class GradeScaleViewComponent {
  public id:any;
  public record:any = {
    level : '',
    position : '',
    grade : '',
    amount : '',
  }
  constructor(public route:ActivatedRoute, public api:ApiService){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewData();
  }

  getViewData(){
    let params = {
      id : this.id
    }
    this.api.viewEmployeeGradeScale(params).subscribe(res=>{
      this.record = res.data;
    })
  }
}
