import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-grade-scale-create',
  templateUrl: './grade-scale-create.component.html',
  styleUrls: ['./grade-scale-create.component.css']
})
export class GradeScaleCreateComponent {
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
