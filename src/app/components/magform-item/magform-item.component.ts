import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
declare var $ : any;
@Component({
  selector: 'app-magform-item',
  templateUrl: './magform-item.component.html',
  styleUrls: ['./magform-item.component.css']
})
export class MagFormItemComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  cmpForm: FormGroup;
  public mode = 'new';
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder, public api:ApiService, public toastify:AlertService, public router:Router){
    this.cmpForm =  this.fb.group({
      id: [''],
      month: ['', Validators.required],
      name : ['', Validators.required], 
      type : ['', Validators.required], 
      visible : ['1', Validators.required], 
      status : ['1', Validators.required], 
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
            }
          }
        },
      },
      {
        headerName : 'ID',
        field : 'id',
        width : 70,
        sortingOrder : ['asc','desc'],
        filter:true
      },
      {
        headerName : 'Month',
        field : 'month',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Name',
        field : 'name',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Type',
        field : 'type',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Visible',
        field : 'visible',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
        cellRenderer: (params:any) => {
          if(params.value == '1'){
            return 'YES';
          }else if(params.value == '0'){
            return 'NO';
          }else{
            return params.value;
          }
        }
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
    this.api.listMagformSettingDetail({}).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        this.gridApi.setRowData(res.data);
      // }
    })
  }

  onAddClick(){
    this.mode = 'new'
    this.cmpForm.patchValue({
      id: '',
      month: '',
      name : '',
      type : '',
      visible : '',
      status : ''
    })
    this.onNewModeOpen();
  }

  onEditModeOpen(){
    this.mode = 'edit';
    var me = this;
    this.modal.open(this.modalContent);
    setTimeout(function(){ 
      me.cmpForm.patchValue(me.gridApi.getSelectedRows()[0]);
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
      this.api.updateMagformSettingDetail(this.cmpForm.value).subscribe(res=>{
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
      this.api.saveMagformSettingDetail(this.cmpForm.value).subscribe(res=>{
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
