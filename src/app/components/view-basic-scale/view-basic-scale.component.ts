import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-basic-scale',
  templateUrl: './view-basic-scale.component.html',
  styleUrls: ['./view-basic-scale.component.css']
})
export class ViewBasicScaleComponent {
  public id:any;
  constructor(public route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
