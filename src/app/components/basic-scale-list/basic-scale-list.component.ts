import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TABLE_CONFIG } from 'src/app/data/constants';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

declare var $ : any;
@Component({
  selector: 'app-basic-scale-list',
  templateUrl: './basic-scale-list.component.html',
  styleUrls: ['./basic-scale-list.component.css']
})
export class BasicScaleListComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  public mode = 'new';
  public tableConfig = TABLE_CONFIG;
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder, public router:Router, public api:ApiService){
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
        hide:true
      },
      {
        headerName : 'कर्मचारी तह',
        field : 'level',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'श्रेणी/ग्रेड',
        field : 'position',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Center Amount',
        field : 'center_amount',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Internal Amount',
        field : 'amount',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true,
      },
      {
        headerName : 'Rupees',
        field : 'total_amount',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Status',
        field : 'status',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      
    ]
    
  }

  onGridReady(params:any){
    // this.getGroups();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.autoSizeColumns();
    this.loadGrid();
  }
  open(content:any){
    this.modal.open(content);
  }

  loadGrid(){
    this.api.listEmployeeSalaryScale({}).subscribe(res=>{
      // if(res.success){
        this.gridApi.setRowData(res.data);
      // }
    })
  }

  onAddClick(){
    this.router.navigate(['basic-scale/create'])
    // this.onNewModeOpen();
  }

  onEditModeOpen(id:any){
    var me = this;
    this.router.navigate(['basic-scale/update/'+id])
  }
  onViewModeOpen(id:any){
    var me = this;
    this.router.navigate(['basic-scale/view/'+id])
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
