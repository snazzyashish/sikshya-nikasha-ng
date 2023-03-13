import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { TABLE_CONFIG } from 'src/app/data/constants';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  @ViewChild('content') modalContent!: ElementRef;
  @ViewChild('confirmDialog') confirmDialog!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  public mode:any = 'new';
  userForm: FormGroup;
  public tableConfig = TABLE_CONFIG;
  ngAfterViewInit() {
    
  }

  constructor(public api:ApiService, public modal:ModalService ,public fb:FormBuilder, public toastify:AlertService, public router:Router){
    this.userForm =  this.fb.group({
      id: [''],
      school_name: ['', Validators.required],
      principal_uname : ['', Validators.required], 
      principal_pass : ['', Validators.required], 
      data_entry_uname : ['', Validators.required], 
      data_entry_pass : ['', Validators.required], 
    });

    this.columnDefs=[
      {
        headerName : 'Action',
        field: '',
        width : 100,
        suppressNavigable: true,
        cellClass: 'no-border',
        cellRenderer: ActionButtonsComponent,
        cellRendererParams: {
          clicked: (id: any, type:any) => {
            if(type == 'edit'){
              this.onEditModeOpen(id);
            }else if(type=='delete'){
              // this.toastify.openSnackBar('Deleted','OK')
              this.toastify.openDialog(this.confirmDialog)
            }
          }
        },
      },
      {
        headerName : 'ID',
        field : 'id',
        width : 70,
        sortingOrder : ['asc','desc'],
        filter:true,
        suppressNavigable: true,
        cellClass: 'no-border',
      },
      {
        headerName : 'Username',
        field : 'username',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Email',
        field : 'email',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
      },
      {
        headerName : 'School/Mun',
        field : 'school_mun',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
      },
      {
        headerName : 'Last Visit',
        field : 'last_visit',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Role',
        field : 'role',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Status',
        field : 'status',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Assign Role',
        field : 'statu',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
    ]
  }

  onEditModeOpen(id:any){
    this.mode = 'edit'
    var me = this;
    this.router.navigate(['user/update/'+id])
  }
  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
  onGridReady(params:any){
    // this.getGroups();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.listUsers();
  }

  listUsers(){
    // this.api.listStoreCredentials(this.queryParams).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        let obj = [
          {
            'id' : 1,
            'username' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
      ]
        this.gridApi.setRowData(obj);
      // }
    // })
  }


  onSaveClick(){
    this.toastify.openSnackBar('Saved','OK')
  }

  onAddClick(){
    this.mode = 'new';
    this.router.navigate(['user/create']);
    // this.userForm.patchValue({
    //   school_name: '',
    //   principal_uname : '', 
    //   principal_pass : '', 
    //   data_entry_uname : '', 
    //   data_entry_pass : '', 
    // })
    // this.onNewModeOpen();
  }
 
}
