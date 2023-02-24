import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-basic-scale',
  templateUrl: './create-basic-scale.component.html',
  styleUrls: ['./create-basic-scale.component.css']
})
export class CreateBasicScaleComponent {
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
