import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastifyService } from 'src/app/services/toastify.service';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent {
  cmpForm: FormGroup;
  public id:any;
  constructor(public api:ApiService, private route: ActivatedRoute, public fb:FormBuilder, public toast:ToastifyService, public router:Router) {
    this.cmpForm =  this.fb.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      tole: ['', Validators.required],
      title_np: ['', Validators.required],
      year: ['', Validators.required],
      code: ['', Validators.required],
      principal_name: ['', Validators.required],
      email: [''],
      principal_no: [''],
      phone: ['', Validators.required],
      principal_email: [''],
      ward_no: [''],
      bank_name: ['', Validators.required],
      school_level: ['', Validators.required],
      account_no: ['', Validators.required],
      class_eight: ['', Validators.required],
      status: [''],
      enroll_classes: [''],
      moto: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onFormSubmit(){
    this.api.saveSchool({}).subscribe(res=>{
      if(res.success){

      }else{
        this.toast.openSnackBar(res.message,'OK');
      }
    })
    // this.toast.openSnackBar('Saved','OK');
    // this.router.navigate(['schools-list']);
  }
}
