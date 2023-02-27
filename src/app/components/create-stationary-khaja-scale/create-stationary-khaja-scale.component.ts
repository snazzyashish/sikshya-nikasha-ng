import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-stationary-khaja-scale',
  templateUrl: './create-stationary-khaja-scale.component.html',
  styleUrls: ['./create-stationary-khaja-scale.component.css']
})
export class CreateStationaryKhajaScaleComponent {
  public id:any;
  public mode='new';
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.mode = 'edit';
    }
  }
}
