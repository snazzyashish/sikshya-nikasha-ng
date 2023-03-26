import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TABLE_CONFIG } from 'src/app/data/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-create-scholarship-amount',
  templateUrl: './create-scholarship-amount.component.html',
  styleUrls: ['./create-scholarship-amount.component.css']
})
export class CreateScholarshipAmountComponent {
  public cmpForm : FormGroup;
  public id:any;
  public mode='new';
  constructor(public modal:ModalService ,public fb:FormBuilder, public router:Router, public api:ApiService, public alert:AlertService, public route:ActivatedRoute){
    this.cmpForm = this.fb.group({
      id : [''],
      type : ['', Validators.required],
      class : ['', Validators.required],
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
    this.api.viewScholarshipScale(params).subscribe(res=>{
      // if(res.success){
        this.cmpForm.patchValue({
          id : res.data.id,
          type : res.data.level,
          class : res.data.class,
          amount : res.data.amount,
          status : res.data.status
        });
      // }
    })
  }

  onFormSubmit(){
    if(this.mode == 'new'){
      this.api.saveScholarshipScale(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message, 'OK');
          this.router.navigate(['scholarship-setting']);
        }
      })
    }else if(this.mode == 'edit'){
      this.api.updateScholarshipScale(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message, 'OK');
          this.router.navigate(['scholarship-setting']);
        }
      })
    }
  }
}
