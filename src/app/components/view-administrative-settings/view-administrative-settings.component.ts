import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-administrative-settings',
  templateUrl: './view-administrative-settings.component.html',
  styleUrls: ['./view-administrative-settings.component.css']
})
export class ViewAdminitrativeSettingsComponent {
  public id:any;
  constructor(public route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
