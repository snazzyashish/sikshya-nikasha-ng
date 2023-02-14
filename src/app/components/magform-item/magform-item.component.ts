import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  magForm: FormGroup;
  public mode = 'new';
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder){
    this.magForm =  this.fb.group({
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
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         },
          {
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         },
          {
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         },
          {
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         },
          {
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         },
          {
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         },
          {
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         },
          {
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         },
          {
            id : 1,
            month: '1',
            name : 'वैशाख तलब', 
            type : 'salary', 
            visible : '1', 
            status : '1', 
         }
      ]
        this.gridApi.setRowData(obj);
      // }
    // })
  }

  onAddClick(){
    this.mode = 'new'
    this.magForm.patchValue({
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
      me.magForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
