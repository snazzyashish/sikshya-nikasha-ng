import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-create-grade-limit',
  templateUrl: './create-grade-limit.component.html',
  styleUrls: ['./create-grade-limit.component.css']
})

export class CreateGradeLimitComponent {
public cmpForm : FormGroup;
public id:any;
  public mode='new';
  constructor(public router:Router, private route: ActivatedRoute, public fb:FormBuilder, public api:ApiService, public alert:AlertService) {
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
      this.getFormData();
    }
  }

  getFormData(){
    let params = {
      id  : this.id
    }
    this.api.viewEmployeeGradeLimit(params).subscribe(res=>{
      // if(res.success){
        this.cmpForm.patchValue({
          id : res.data.id,
          level : res.data.level,
          position : res.data.position,
          gradelimit : res.data.gradelimit
        });
      // }
    })
  }

  onFormSubmit(){
    if(this.mode == 'new'){
      this.api.saveEmployeeGradeLimit(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message, 'OK');
          this.router.navigate(['grade-limit/list']);
        }
      })
    }else if(this.mode == 'edit'){
      this.api.updateEmployeeGradeLimit(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message, 'OK');
          this.router.navigate(['grade-limit/list']);
        }
      })
    }
  }

}
