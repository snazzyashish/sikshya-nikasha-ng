import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-insfrastructure-scale',
  templateUrl: './view-insfrastructure-scale.component.html',
  styleUrls: ['./view-insfrastructure-scale.component.css']
})
export class ViewInsfrastructureScaleComponent {
  public id:any;
  constructor(public route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
