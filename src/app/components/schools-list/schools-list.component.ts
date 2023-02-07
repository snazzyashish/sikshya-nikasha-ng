import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';


declare var $ : any;
@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent {
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;

  constructor(){
    this.columnDefs=[
      {
        headerName : 'ID',
        field : 'id',
        width : 70,
        sortingOrder : ['asc','desc'],
        filter:true
      },
      {
        headerName : 'School Name',
        field : 'school_name',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Principal UName',
        field : 'principal_uname',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Principal PSW',
        field : 'principal_pass',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'DataEntry Username',
        field : 'data_entry_uname',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'DataEntry PSW',
        field : 'data_entry_uname',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        field: 'id',
        cellRenderer: ActionButtonsComponent,
        cellRendererParams: {
          clicked: (field: any) => {
            alert(`${field} was clicked`);
          }
        },
      }
    ]
  }
  onGridReady(params:any){
    // this.getGroups();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.listUsers();
  }

  listUsers(){
    // this.api.listStoreCredentials(this.queryParams).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        let obj = [
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'principal_uname' : 'headteacher1',
            'principal_pass' : 'ac2bd348bf36a7128fbd',
            'data_entry_uname' : 'dataentry1',
            'data_entry_pass' : 'bardibas1',
         }
      ]
        this.gridApi.setRowData(obj);
      // }
    // })
  }
}
