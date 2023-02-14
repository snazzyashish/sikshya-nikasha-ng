import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $ : any;
@Component({
  selector: 'app-fiscal-year',
  templateUrl: './fiscal-year.component.html',
  styleUrls: ['./fiscal-year.component.css']
})
export class FiscalYearComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  fiscalYearForm: FormGroup;
  public mode = 'new';
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder){
    this.fiscalYearForm =  this.fb.group({
      id: [''],
      name: ['', Validators.required],
      from_date : ['', Validators.required], 
      to_date : ['', Validators.required], 
      status : ['', Validators.required], 
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
        headerName : 'Name',
        field : 'name',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'From Date',
        field : 'from_date',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'To Date',
        field : 'to_date',
        width : 150,
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
      },
    ]
  }

  onGridReady(params:any){
    // this.getGroups();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.listFiscalYear();
  }
  open(content:any){
    this.modal.open(content);
  }

  listFiscalYear(){
    // this.api.listStoreCredentials(this.queryParams).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        let obj = [
          {
            id : 1,
            name: '2078/2079',
            from_date : '2021-07-17', 
            to_date : '2022-07-16', 
            status : '1', 
         },
          {
            id : 2,
            name: '2078/2079',
            from_date : '2021-07-17', 
            to_date : '2022-07-16', 
            status : '0', 
         }
        
      ]
        this.gridApi.setRowData(obj);
      // }
    // })
  }

  onAddClick(){
    this.mode = 'new'
    this.fiscalYearForm.patchValue({
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
      me.fiscalYearForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
