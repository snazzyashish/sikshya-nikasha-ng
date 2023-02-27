import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-insfrastructure-scale',
  templateUrl: './create-insfrastructure-scale.component.html',
  styleUrls: ['./create-insfrastructure-scale.component.css']
})
export class CreateInsfrastructureScaleComponent {
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
