import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-view-basic-scale',
  templateUrl: './view-basic-scale.component.html',
  styleUrls: ['./view-basic-scale.component.css']
})
export class ViewBasicScaleComponent {
  public id:any;
  public record:any = {
    id : '',
    level : '',
    position : '',
    amount : '',
    status : '',
    center_amount : '',
  }
  constructor(public route:ActivatedRoute, public api:ApiService){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewData();
  }

  getViewData(){
    let params = {
      id : this.id
    }
    this.api.viewEmployeeSalaryScale(params).subscribe(res=>{
      this.record = res.data;
    })
  }
}
