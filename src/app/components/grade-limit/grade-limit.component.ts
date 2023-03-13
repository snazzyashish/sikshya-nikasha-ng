import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TABLE_CONFIG } from 'src/app/data/constants';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';

declare var $ : any;
@Component({
  selector: 'app-grade-limit',
  templateUrl: './grade-limit.component.html',
  styleUrls: ['./grade-limit.component.css']
})
export class GradeLimitComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  cmpForm: FormGroup;
  public mode = 'new';
  public tableConfig = TABLE_CONFIG;
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder, public router:Router, public api:ApiService, public alert:AlertService){
    this.alert.changeVar.subscribe(message => {
      if(message){
        this.onDeleteRecord();
      }
    })
    this.cmpForm =  this.fb.group({
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
            }else if(type == 'delete'){
              this.alert.showDeleteConfirm();
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
        headerName : 'SN',
        field : '',
        width : 70,
        sortingOrder : ['asc','desc'],
        filter:true
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
        headerName : 'Sherni',
        field : 'position',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Grade Limit',
        field : 'gradelimit',
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
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Created At',
        field : 'created_at',
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
    this.loadGrid();
  }
  open(content:any){
    this.modal.open(content);
  }

  loadGrid(){
    this.api.listEmployeeGradeLimit({}).subscribe(res=>{
      if(res.success){
        this.gridApi.setRowData(res.data);
      }
    })
  }

  onAddClick(){
    this.mode = 'new';
    this.router.navigate(['grade-limit/create'])
    // this.onNewModeOpen();
  }

  onEditModeOpen(id:any){
    var me = this;
    this.router.navigate(['grade-limit/update/'+id])
  }
  onViewModeOpen(id:any){
    var me = this;
    this.router.navigate(['grade-limit/view/'+id])
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }

  onDeleteRecord(){
    let params = {
      id : this.gridApi.getSelectedRows()[0].id
    }
    this.api.deleteEmployeeGradeLimit(params).subscribe(res=>{
      if(res.success){
        this.alert.openSnackBar(res.message,'OK');
        this.loadGrid();
      }
    })
  }
}
