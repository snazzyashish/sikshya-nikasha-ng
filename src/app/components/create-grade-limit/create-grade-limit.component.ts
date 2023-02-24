import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-grade-limit',
  templateUrl: './create-grade-limit.component.html',
  styleUrls: ['./create-grade-limit.component.css']
})
export class CreateGradeLimitComponent {
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
