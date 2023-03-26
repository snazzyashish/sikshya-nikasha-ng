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
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  schoolForm: FormGroup;
  public mode = 'new';
  public tableConfig = TABLE_CONFIG;
  public modifiedRecords:any;
  ngAfterViewInit() {
    
  }

  constructor(public toastify:AlertService, public modal:ModalService ,public fb:FormBuilder, public router:Router, public api:ApiService){
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
        filter:true
      },
      {
        headerName : 'School Name',
        field : 'school',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Account',
        field : 'account_no',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Type',
        field : 'school_type',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Principal',
        field : 'principal_name',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Principal No.',
        field : 'principal_no',
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
    this.loadGridData();
  }
  open(content:any){
    this.modal.open(content);
  }

  loadGridData(){
    this.api.listSchools({}).subscribe(res=>{
      if(res.success){
        this.gridApi.setRowData(res.data);
      }
    })
  }

  onAddClick(){
    this.mode = 'new'
    this.router.navigate(['school/create']);
  }

  onSaveClick(){
    var me = this;
      me.modifiedRecords = [];
      let items: any = [];
      this.gridApi.forEachNode(function(node:any) { 
        me.modifiedRecords.push(node.data);
      });

      let params = {
        modifiedRecords : this.modifiedRecords
      }

      this.api.saveSchoolGrid(params).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
        }
      })
  }

  onEditModeOpen(id:any){
    var me = this;
   this.router.navigate(['school/update/'+id]);
  }

  onViewModeOpen(id:any){
    var me = this;
   this.router.navigate(['school/view/'+id]);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
