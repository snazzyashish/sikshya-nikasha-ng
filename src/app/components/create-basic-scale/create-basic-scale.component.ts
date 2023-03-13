import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TABLE_CONFIG } from 'src/app/data/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-create-basic-scale',
  templateUrl: './create-basic-scale.component.html',
  styleUrls: ['./create-basic-scale.component.css']
})
export class CreateBasicScaleComponent {
  public cmpForm : FormGroup;
  public id:any;
  public mode='new';
  constructor(public modal:ModalService ,public fb:FormBuilder, public router:Router, public api:ApiService, public alert:AlertService, public route:ActivatedRoute){
    this.cmpForm = this.fb.group({
      id : [''],
      level : ['', Validators.required],
      gradelimit : ['', Validators.required],
      position : ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.mode = 'edit';
    }
  }

  getFormData(){

  }

}
