import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  componentForm: FormGroup;
  public mode = 'new';
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder){
    this.componentForm =  this.fb.group({
      id: [''],
      fiscal_year: ['', Validators.required],
      name : ['', Validators.required], 
      nagar_teacher : ['', Validators.required], 
      status : ['1', Validators.required], 
    });
    this.columnDefs=[
      {
        headerName : 'Action',
        field: 'id',
        width : 120,
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
        filter:true,
        hide:true
      },
      {
        headerName : 'Fiscal Year',
        field : 'fiscal_year',
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
  }

  onGridReady(params:any){
    // this.getGroups();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.listGrid();
  }
  open(content:any){
    this.modal.open(content);
  }

  listGrid(){
    // this.api.listStoreCredentials(this.queryParams).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        let obj = [
          {
            id: '1',
            fiscal_year: '2078/79',
            name : 'मंसिर महिनाको',
            nagar_teacher : 'NO',
            status : '1',
          },
          {
            id: '2',
            fiscal_year: '2078/79',
            name : 'पौष महिनाको',
            nagar_teacher : 'NO',
            status : '1',
          },
      ]
        this.gridApi.setRowData(obj);
      // }
    // })
  }

  onAddClick(){
    this.mode = 'new'
    this.componentForm.patchValue({
      name: '',
      from_date : '', 
      to_date : '', 
      status : '', 
    })
    this.onNewModeOpen();
  }

  onEditModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
    setTimeout(function(){ 
      me.componentForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
