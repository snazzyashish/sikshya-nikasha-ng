import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-grade-scale-view',
  templateUrl: './grade-scale-view.component.html',
  styleUrls: ['./grade-scale-view.component.css']
})
export class GradeScaleViewComponent {
  public id:any;
  constructor(public route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
