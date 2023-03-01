import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastifyService } from 'src/app/services/toastify.service';

@Component({
  selector: 'app-employee-detail-update',
  templateUrl: './employee-detail-update.component.html',
  styleUrls: ['./employee-detail-update.component.css']
})
export class EmployeeDetailUpdateComponent {
  cmpForm: FormGroup;
  public id:any;
  public schoolList:any;
  constructor(public api:ApiService, private route: ActivatedRoute, public fb:FormBuilder, public toast:ToastifyService, public router:Router) {
    this.cmpForm =  this.fb.group({
      id: [''],
      first_name: ['', Validators.required],
      middle_name: ['', Validators.required],
      last_name: ['', Validators.required],
      first_name_np: ['', Validators.required],
      middle_name_np: ['', Validators.required],
      last_name_np: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      sanket_no:[''],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      post: ['', Validators.required],
      level: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      grade: ['', Validators.required],
      jaatiya: ['', Validators.required],
      temp_address: ['', Validators.required],
      jaat: ['', Validators.required],
      per_address: ['', Validators.required],
      martial_status: ['', Validators.required],
      temp_appointment_date: ['', Validators.required],
      contact_no: ['', Validators.required],
      per_appointment_date: ['', Validators.required],
      insurance_no: ['', Validators.required],
      promotion_date: ['', Validators.required],
      epf_no: ['', Validators.required],
      retired: ['', Validators.required],
      bank: ['', Validators.required],
      pan_no: ['', Validators.required],
      acc_no: ['', Validators.required],
      kram_no: ['', Validators.required],
      cit_no: ['', Validators.required],
      kaifiyat: ['', Validators.required],
      status: ['', Validators.required],
      school: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSchoolList();
  }

  onFormSubmit(){
    this.api.saveEmployees({}).subscribe(res=>{
      if(res.success){
        this.toast.openSnackBar(res.message,'OK');
      }else{
        this.toast.openSnackBar(res.message,'ERROR');
      }
    })
    // this.toast.openSnackBar('Saved','OK');
    // this.router.navigate(['schools-list']);
  }

  getSchoolList(){
    this.api.listSchools({}).subscribe(res=>{
      if(res.data){
        this.schoolList = res.data;
      }
    })
  }

}
