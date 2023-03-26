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
      type : ['', Validators.required],
      grade : ['', Validators.required],
      amount : ['', Validators.required],
      center_amount : ['', Validators.required],
      total_amount : ['', Validators.required],
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
    this.api.viewEmployeeSalaryScale(params).subscribe(res=>{
      // if(res.success){
        this.cmpForm.patchValue({
          id : res.data.id,
          level : res.data.level,
          position : res.data.position,
          type : res.data.type,
          grade : res.data.grade,
          total_amount : res.data.total_amount,
          amount : res.data.amount,
          center_amount : res.data.center_amount
        });
      // }
    })
  }

  onFormSubmit(){
    if(this.mode == 'new'){
      this.api.saveEmployeeSalaryScale(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message, 'OK');
          this.router.navigate(['basic-scale/list']);
        }
      })
    }else if(this.mode == 'edit'){
      this.api.updateEmployeeSalaryScale(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message, 'OK');
          this.router.navigate(['basic-scale/list']);
        }
      })
    }
  }


}
