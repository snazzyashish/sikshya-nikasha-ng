import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TABLE_CONFIG } from 'src/app/data/constants';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

declare var $ : any;
@Component({
  selector: 'app-insfrastructure-scale-list',
  templateUrl: './insfrastructure-scale-list.component.html',
  styleUrls: ['./insfrastructure-scale-list.component.css']
})
export class InfrastructureScaleListComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  schoolForm: FormGroup;
  public mode = 'new';
  public tableConfig = TABLE_CONFIG;
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder, public router:Router, public api:ApiService){
    this.schoolForm =  this.fb.group({
      id: [''],
      school_name: ['', Validators.required],
      account : ['', Validators.required], 
      type : ['', Validators.required], 
      principal_name : ['', Validators.required], 
      principal_no : ['', Validators.required], 
    });
    this.columnDefs=[
      {
        headerName : 'Action',
        field: 'id',
        width : 140,
        suppressNavigable: true,
        cellClass: 'no-border',
        cellRenderer: ActionButtonsComponent,
        cellRendererParams: {
          clicked: (id: any, type:any) => {
            if(type == 'edit'){
              this.onEditModeOpen(id);
            }else if(type == 'view'){
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
        hide:false
      },
      {
        headerName : 'Level',
        field : 'level',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Infrastructure',
        field : 'infrastructure',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Amount',
        field : 'amount',
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
      {
        headerName : 'Created At',
        field : 'created_at',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true,
      },
    ]
    
  }

  onGridReady(params:any){
    // this.getGroups();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.autoSizeColumns();
    this.listUsers();
  }
  open(content:any){
    this.modal.open(content);
  }

  listUsers(){
    this.api.listInfrastructureScale({}).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        this.gridApi.setRowData(res.data);
      // }
    })
  }

  onAddClick(){
    this.mode = 'new'
    this.schoolForm.patchValue({
      school_name: '',
      account : '', 
      type : '', 
      principal_name : '', 
      principal_no : '',
    })
    this.router.navigate(['infrastructure-scale/create'])
    // this.onNewModeOpen();
  }

  onEditModeOpen(id:any){
    var me = this;
    this.router.navigate(['infrastructure-scale/update/'+id])
  }
  onViewModeOpen(id:any){
    var me = this;
    this.router.navigate(['infrastructure-scale/view/'+id])
  }

}
