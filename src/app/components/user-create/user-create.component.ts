import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { USER_ROLES } from 'src/app/data/constants';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  public userRoles = USER_ROLES;
  public id:any;
  public mode='new';
  public schoolList:any;
  public cmpForm:FormGroup
  constructor(private route: ActivatedRoute, public api:ApiService, public fb:FormBuilder, public toastify:AlertService) {
    this.cmpForm =  this.fb.group({
      id : [''],
      name : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      role_id : ['', Validators.required],
      school : ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.mode = 'edit';
    }
    this.getSchoolList();
  }

  getSchoolList(){
    this.api.listSchools({}).subscribe(res=>{
      if(res.success){
        this.schoolList=res.data; 
      }
    })
  }

  onFormSubmit(){
    this.api.signup(this.cmpForm.value).subscribe(res=>{
      this.toastify.openSnackBar(res.message, 'OK');
    })
  }
}
