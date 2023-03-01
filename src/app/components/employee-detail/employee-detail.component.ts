import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { TABLE_CONFIG } from 'src/app/data/constants';
import { ApiService } from 'src/app/services/api.service';


declare var $ : any;
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  searchForm: FormGroup;
  public mode = 'new';
  public showSearchForm:boolean = false;
  public tableConfig = TABLE_CONFIG;
  ngAfterViewInit() {
    
  }

  constructor(public router:Router, public modal:ModalService ,public fb:FormBuilder, public api:ApiService){
    this.searchForm =  this.fb.group({
      gender: [''],
      type: [''],
      level: [''],
      post: [''],
      school: [''],
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
            }else if(type == 'add'){
              this.onAddClick();
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
        headerName : 'School',
        field : 'school_name',
        width : 250,
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
        headerName : 'Level',
        field : 'level',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Category',
        field : 'category',
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
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Post',
        field : 'post',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Grade',
        field : 'grade',
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

  onFormHeaderClick(){
    this.showSearchForm = !this.showSearchForm;
  }

  onFormSubmit(){
    this.showSearchForm = !this.showSearchForm;
    this.api.searchEmployees(this.searchForm.value).subscribe(res=>{
      if(res.success){
        //set grid records
      }
    })
  }

  onFormReset(){
    this.listUsers();
  }

  onGridReady(params:any){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.listUsers();
  }
  open(content:any){
    this.modal.open(content);
  }

  listUsers(){
    this.api.listEmployees({}).subscribe(res=>{
      if(res.success){
        this.gridApi.setRowData(res.data);
      }
    })
  }

  onAddClick(){
    this.mode = 'new'
    this.router.navigate(['employee-detail/create']);
  }

  onEditModeOpen(id:any){
    var me = this;
    this.router.navigate(['/employee-detail/update/'+id]);
  }
  onViewModeOpen(id:any){
    var me = this;
    this.router.navigate(['/employee-detail/view/'+id]);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
