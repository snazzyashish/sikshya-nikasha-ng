import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-employee-detail-update',
  templateUrl: './employee-detail-update.component.html',
  styleUrls: ['./employee-detail-update.component.css']
})
export class EmployeeDetailUpdateComponent {
  cmpForm: FormGroup;
  public id:any;
  public schoolList:any;
  public mode:any = 'new'
  constructor(public api:ApiService, private route: ActivatedRoute, public fb:FormBuilder, public toast:AlertService, public router:Router) {
    this.cmpForm =  this.fb.group({
      id: [''],
      fname_eng: ['', Validators.required],
      mname_eng: ['', Validators.required],
      lname_eng: ['', Validators.required],
      fname_nep: ['', Validators.required],
      mname_nep: ['', Validators.required],
      lname_nep: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      signal_no:[''],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      account_no: ['', Validators.required],
      position: ['', Validators.required],
      level: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      grade: ['', Validators.required],
      caste: ['', Validators.required],
      temp_address: ['', Validators.required],
      jaat: ['', Validators.required],
      permanent_address: ['', Validators.required],
      martial_status: ['', Validators.required],
      temporary_appointment: ['', Validators.required],
      contact_no: ['', Validators.required],
      permenant_appointment: ['', Validators.required],
      insurance_no: ['', Validators.required],
      promotion_date: ['', Validators.required],
      provident_fund: ['', Validators.required],
      retire: ['', Validators.required],
      bank: ['', Validators.required],
      pan_no: ['', Validators.required],
      sequence_no: ['', Validators.required],
      citizen_investment_no: ['', Validators.required],
      remark: ['', Validators.required],
      status: ['', Validators.required],
      school_name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSchoolList();
    if(this.id){
      this.mode = 'edit';
      this.getFormData();
    }
  }

  getFormData(){
    let params = {
      id : this.id
    }
    this.api.viewEmployee(params).subscribe(res=>{
      this.cmpForm.patchValue(res.data);
    })
  }

  onFormSubmit(){
    if(this.mode == 'edit'){
      this.api.udpdateEmployees(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.toast.openSnackBar(res.message,'OK');
          this.router.navigate(['employee-detail/list']);
        }else{
          this.toast.openSnackBar(res.message,'ERROR');
        }
      })
    }else{
      this.api.saveEmployees(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.toast.openSnackBar(res.message,'OK');
          this.router.navigate(['employee-detail/list']);
        }else{
          this.toast.openSnackBar(res.message,'ERROR');
        }
      })
    }
  }

  getSchoolList(){
    this.api.listSchools({}).subscribe(res=>{
      if(res.data){
        this.schoolList = res.data;
      }
    })
  }

}
