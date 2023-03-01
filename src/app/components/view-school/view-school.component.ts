import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-school',
  templateUrl: './view-school.component.html',
  styleUrls: ['./view-school.component.css']
})
export class ViewSchoolComponent {
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
    this.api.viewSchool(params).subscribe(res=>{
      this.record = res.data;
    })
  }
}
