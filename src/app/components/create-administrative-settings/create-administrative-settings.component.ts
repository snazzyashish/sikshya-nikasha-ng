import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-administrative-settings',
  templateUrl: './create-administrative-settings.component.html',
  styleUrls: ['./create-administrative-settings.component.css']
})
export class CreateAdministrativeSettingsComponent {
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
