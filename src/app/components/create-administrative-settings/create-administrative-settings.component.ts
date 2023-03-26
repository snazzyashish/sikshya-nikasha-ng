import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TABLE_CONFIG } from 'src/app/data/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-create-administrative-settings',
  templateUrl: './create-administrative-settings.component.html',
  styleUrls: ['./create-administrative-settings.component.css']
})
export class CreateAdministrativeSettingsComponent {
  public cmpForm : FormGroup;
  public id:any;
  public mode='new';
  constructor(public modal:ModalService ,public fb:FormBuilder, public router:Router, public api:ApiService, public alert:AlertService, public route:ActivatedRoute){
    this.cmpForm = this.fb.group({
      id : [''],
      level : ['', Validators.required],
      amount : ['', Validators.required],
      status : ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.mode = 'edit';
      this.getFormData();
    }
  }

  getFormData(){
    let params = {
      id  : this.id
    }
    this.api.viewAdministrationScale(params).subscribe(res=>{
      // if(res.success){
        this.cmpForm.patchValue({
          id : res.data.id,
          level : res.data.level,
          status : res.data.status,
          amount : res.data.amount
        });
      // }
    })
  }

  onFormSubmit(){
    if(this.mode == 'new'){
      this.api.saveAdministrationScale(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message, 'OK');
          this.router.navigate(['admin-setting/list']);
        }
      })
    }else if(this.mode == 'edit'){
      this.api.updateAdministrationScale(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message, 'OK');
          this.router.navigate(['admin-setting/list']);
        }
      })
    }
  }

}
