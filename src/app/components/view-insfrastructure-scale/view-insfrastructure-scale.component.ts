import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-insfrastructure-scale',
  templateUrl: './view-insfrastructure-scale.component.html',
  styleUrls: ['./view-insfrastructure-scale.component.css']
})
export class ViewInsfrastructureScaleComponent {
  public id:any;
  public record:any = {
    id:'',
    level : '',
    insfrastructure : '',
    amount : '',
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
      id  : this.id
    }
    this.api.viewInfrastructureScale(params).subscribe(res=>{
      // if(res.success){
       this.record = res.data;
      // }
    })
  }
}
