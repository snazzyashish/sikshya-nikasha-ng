import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-grade-limit-view',
  templateUrl: './grade-limit-view.component.html',
  styleUrls: ['./grade-limit-view.component.css']
})
export class GradeLimitViewComponent {
  public id:any;
  constructor(public route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
