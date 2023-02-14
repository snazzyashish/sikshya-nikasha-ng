import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastifyService } from 'src/app/services/toastify.service';
import { ToastifyToastContainerComponent } from 'angular-toastify';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @ViewChild('content') modalContent!: ElementRef;
  @ViewChild('confirmDialog') confirmDialog!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  public mode:any = 'new';
  userForm: FormGroup;
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder, public toastify: ToastifyService){
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
        field: 'id',
        width : 100,
        suppressNavigable: true,
        cellClass: 'no-border',
        cellRenderer: ActionButtonsComponent,
        cellRendererParams: {
          clicked: (id: any, type:any) => {
            if(type == 'edit'){
              this.onEditModeOpen();
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
        cellClass: 'no-border'
      },
      {
        headerName : 'School Name',
        field : 'school_name',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Principal UName',
        field : 'principal_uname',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
      },
      {
        headerName : 'Principal PSW',
        field : 'principal_pass',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
      },
      {
        headerName : 'DataEntry Username',
        field : 'data_entry_uname',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'DataEntry PSW',
        field : 'data_entry_pass',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
    ]
  }

  onEditModeOpen(){
    this.mode = 'edit'
    var me = this;
    this.modal.open(this.modalContent);
    setTimeout(function(){ 
      me.userForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
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
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         },
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
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
    this.mode = 'new'
    this.userForm.patchValue({
      school_name: '',
      principal_uname : '', 
      principal_pass : '', 
      data_entry_uname : '', 
      data_entry_pass : '', 
    })
    this.onNewModeOpen();
  }
 
}
