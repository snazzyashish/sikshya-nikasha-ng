import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-view-administrative-settings',
  templateUrl: './view-administrative-settings.component.html',
  styleUrls: ['./view-administrative-settings.component.css']
})
export class ViewAdminitrativeSettingsComponent {
  public id:any;
  public record:any = {
    id:'',
    level : '',
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
    this.api.viewAdministrationScale(params).subscribe(res=>{
      // if(res.success){
       this.record = res.data;
      // }
    })
  }
}
