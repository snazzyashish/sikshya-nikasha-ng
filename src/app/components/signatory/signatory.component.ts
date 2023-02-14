import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastifyService } from 'src/app/services/toastify.service';
import { ToastifyToastContainerComponent } from 'angular-toastify';

@Component({
  selector: 'app-signatory',
  templateUrl: './signatory.component.html',
  styleUrls: ['./signatory.component.css']
})
export class SignatoryComponent {
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
      name: ['', Validators.required],
      post : ['', Validators.required], 
      signature : ['', Validators.required], 
      status : ['', Validators.required], 
    });

    this.columnDefs=[
      {
        headerName : 'Action',
        field: 'id',
        width : 110,
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
        headerName : 'Name',
        field : 'name',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Post',
        field : 'post',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
      },
      {
        headerName : 'Signature',
        field : 'signature',
        width : 200,
        sortingOrder : ['asc','desc'],
        editable: true,
      },
      {
        headerName : 'Status',
        field : 'status',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        cellRenderer: (params:any) => {
          if(params.value == '1'){
            return 'Active';
          }else if(params.value == '0'){
            return 'Inactive';
          }else{
            return params.value;
          }
        }
      }
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
    this.listGrid();
  }

  listGrid(){
    // this.api.listStoreCredentials(this.queryParams).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        let obj = [
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
          },
          {
            'id' : 1,
            'name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'post' : 'headteacher1',
            'signature' : 'ac2bd348bf36a7128fbd',
            'status' : 'dataentry1',
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
