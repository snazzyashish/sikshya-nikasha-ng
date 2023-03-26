import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

declare var $ : any;
@Component({
  selector: 'app-magform-setting',
  templateUrl: './magform-setting.component.html',
  styleUrls: ['./magform-setting.component.css']
})
export class MagFormSettingComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  public fiscalYears:any;
  componentForm: FormGroup;
  public mode = 'new';
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder, public api:ApiService, public toastify:AlertService, public router:Router){
    this.componentForm =  this.fb.group({
      id: [''],
      fiscalyear: ['', Validators.required],
      name : ['', Validators.required], 
      header : ['', Validators.required], 
      nagar_teacher : ['', Validators.required], 
      status : ['1', Validators.required], 
    });
    this.columnDefs=[
      {
        headerName : 'Action',
        field: 'id',
        width : 150,
        suppressNavigable: true,
        cellClass: 'no-border',
        cellRenderer: ActionButtonsComponent,
        cellRendererParams: {
          clicked: (id: any, type:any) => {
            if(type == 'edit'){
              this.onEditModeOpen();
            }else  if(type == 'view'){
              this.onViewModeOpen(id);
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
        hide:true
      },
      {
        headerName : 'Fiscal Year',
        field : 'fiscalyear',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Name',
        field : 'name',
        width : 200,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Header',
        field : 'header',
        width : 200,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Nagar Teacher',
        field : 'nagar_teacher',
        width : 200,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Status',
        field : 'status',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
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
      },
    ]
    this.listFiscalYears();
  }

  listFiscalYears(){
    this.api.listFiscalYear({}).subscribe(res=>{
      this.fiscalYears = res.data;
    })
  }

  onGridReady(params:any){
    // this.getGroups();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.loadGrid();
  }
  open(content:any){
    this.modal.open(content);
  }

  loadGrid(){
    this.api.listMagformFiscalYear({}).subscribe(res=>{
      // if(res.success){
        this.gridApi.setRowData(res.data);
      // }
    })
  }

  onAddClick(){
    this.mode = 'new'
    this.componentForm.patchValue({
      id : '',
      name: '',
      fiscalyear: '',
      header: '',
      nagar_teacher : '', 
      status : '', 
    })
    this.onNewModeOpen();
  }

  onEditModeOpen(){
    this.mode = 'edit';
    var me = this;
    this.modal.open(this.modalContent);
    setTimeout(function(){ 
      me.componentForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
  }

  onViewModeOpen(id:any){
    this.router.navigate(['magform-setting/view/'+id]);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }

  onFormSubmit(){
    if(this.mode == 'edit'){
      let params = {
        
      }
      this.api.updateMagformFiscalYear(this.componentForm.value).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
          // this.router.navigate(['scholarship/list']);
          this.modal.close('')
          this.loadGrid();
          
        }else{
          this.toastify.openSnackBar(res.message,'ERROR');
        }
      })
    }else{
      this.api.saveMagformFiscalYear(this.componentForm.value).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
          // this.router.navigate(['scholarship/list']);
          this.modal.close('')
          this.loadGrid();
          
        }else{
          this.toastify.openSnackBar(res.message,'ERROR');
        }
      })
    }
    // this.toast.openSnackBar('Saved','OK');
    // this.router.navigate(['schools-list']);
  }
}
