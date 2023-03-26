import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';

declare var $ : any;
@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.css']
})
export class AcademicYearComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  cmpForm: FormGroup;
  public mode = 'new';
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder, public api:ApiService, public alert:AlertService){
    this.alert.changeVar.subscribe(message => {
      if(message){
        this.onDeleteRecord();
      }
    })
    this.cmpForm =  this.fb.group({
      id: [''],
      name: ['', Validators.required],
      from_date_nep : ['', Validators.required], 
      from_date_eng : ['', Validators.required], 
      to_date_nep : ['', Validators.required], 
      to_date_eng : ['', Validators.required], 
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
        hide : true
      },
      {
        headerName : 'Year',
        field : 'name',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Starting Nepali Date',
        field : 'from_date_nep',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
        wrapHeaderText: true,
        autoHeaderHeight: true
      },
      {
        headerName : 'Starting English Date',
        field : 'from_date_eng',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
        wrapHeaderText: true,
        autoHeaderHeight: true
      },
      {
        headerName : 'End Nepali Date',
        field : 'to_date_nep',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
        wrapHeaderText: true,
        autoHeaderHeight: true
      },
      {
        headerName : 'End English Date',
        field : 'to_date_eng',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
        wrapHeaderText: true,
        autoHeaderHeight: true
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
    this.loadGrid();
  }
  open(content:any){
    this.modal.open(content);
  }

  loadGrid(){
    this.api.listAcademicYear({}).subscribe(res=>{
      if(res.success){
        this.gridApi.setRowData(res.data);
      }
    })
  }

  onAddClick(){
    this.mode = 'new'
    this.cmpForm.patchValue({
      name:'',
      from_date_nep :'',
      from_date_eng :'',
      to_date_nep :'',
      to_date_eng :'',
      status :'',
    })
    this.onNewModeOpen();
  }

  onEditModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
    setTimeout(function(){ 
      me.cmpForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }

  onDeleteRecord(){
    let params = {
      id : this.gridApi.getSelectedRows()[0].id
    }
    this.api.deleteAcademicYear(params).subscribe(res=>{
      if(res.success){
        this.alert.openSnackBar(res.message,'OK');
        this.loadGrid();
      }
    })
  }

  onFormSubmit(){
    if(this.mode == 'new'){
      this.api.saveAcademicYear(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.modal.close('');
          this.alert.openSnackBar(res.message,'OK');
          this.loadGrid();
        }
      })
    }else if(this.mode == 'edit'){
      this.api.updateAcademicYear(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.modal.close('');
          this.alert.openSnackBar(res.message,'OK');
          this.loadGrid();
        }
      })
    }
  }
}
