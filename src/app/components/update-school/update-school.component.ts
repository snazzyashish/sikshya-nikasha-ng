import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent {
  cmpForm: FormGroup;
  public id:any;
  public mode:any = 'new';
  constructor(public api:ApiService, private route: ActivatedRoute, public fb:FormBuilder, public toast:AlertService, public router:Router) {
    this.cmpForm =  this.fb.group({
      id: [''],
      school: ['', Validators.required],
      school_type: ['', Validators.required],
      tole: ['', Validators.required],
      title_nepali: ['', Validators.required],
      est_year: ['', Validators.required],
      school_code: ['', Validators.required],
      principal_name: ['', Validators.required],
      school_email: [''],
      principal_no: [''],
      school_phone: ['', Validators.required],
      principal_email: [''],
      ward_no: [''],
      bank_name: ['', Validators.required],
      school_level: ['', Validators.required],
      account_no: ['', Validators.required],
      class_eight: ['', Validators.required],
      status: [''],
      enroll_class: [''],
      moto: [''],
      logo : ['']
    });
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
      id : this.id
    }
    this.api.viewSchool(params).subscribe(res=>{
      this.cmpForm.patchValue(res.data);
    })
  }

  onFormSubmit(){
    if(this.mode == 'edit'){
      let params = {
        
      }
      this.api.updateSchool(this.cmpForm.value).subscribe(res=>{
        debugger;
      })
    }else{
      this.api.saveSchool(this.cmpForm.value).subscribe(res=>{
        if(res.success){
  
        }else{
          this.toast.openSnackBar(res.message,'OK');
        }
      })
    }
    // this.toast.openSnackBar('Saved','OK');
    // this.router.navigate(['schools-list']);
  }
}
