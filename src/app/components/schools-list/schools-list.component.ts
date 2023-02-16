import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TABLE_CONFIG } from 'src/app/data/constants';

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
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder){
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
        headerName : 'School Name',
        field : 'school_name',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Account',
        field : 'account',
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
    this.listUsers();
  }
  open(content:any){
    this.modal.open(content);
  }

  listUsers(){
    // this.api.listStoreCredentials(this.queryParams).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        let obj = [
          {
            'id' : 1,
            'school_name' : '1-SCHOOL/1-विद्यालय , 1 - टोल',
            'account' : '006301084470013',
            'type' : 'Community',
            'principal_name' : '	इन्द्रराज लामा',
            'principal_no' : '9844223050',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
         {
          'id' : 2,
          'school_name' : '2-SCHOOL, DEMO-1 टोल 2-विद्यालय , डेमो नगरपालिका-१',
          'account' : '1006301214777019',
          'type' : 'Community',
          'principal_name' : '	सरस्वती मिश्रा',
          'principal_no' : '9860564810',
         },
      ]
        this.gridApi.setRowData(obj);
      // }
    // })
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
    this.onNewModeOpen();
  }

  onEditModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
    setTimeout(function(){ 
      me.schoolForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
