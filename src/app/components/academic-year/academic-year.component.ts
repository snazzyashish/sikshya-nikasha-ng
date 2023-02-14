import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  componentForm: FormGroup;
  public mode = 'new';
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder){
    this.componentForm =  this.fb.group({
      id: [''],
      year: ['', Validators.required],
      starting_nepali_date : ['', Validators.required], 
      starting_english_date : ['', Validators.required], 
      end_nepali_date : ['', Validators.required], 
      end_english_date : ['', Validators.required], 
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
        filter:true,
        hide : true
      },
      {
        headerName : 'Year',
        field : 'year',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Starting Nepali Date',
        field : 'starting_nepali_date',
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
        field : 'starting_english_date',
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
        field : 'end_nepali_date',
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
        field : 'end_english_date',
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
    this.listGridItems();
  }
  open(content:any){
    this.modal.open(content);
  }

  listGridItems(){
    // this.api.listStoreCredentials(this.queryParams).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        let obj = [
          {
            id: '1',
            year: '2023',
            starting_nepali_date : '2079-01-01',
            starting_english_date : '2023-01-01',
            end_nepali_date : '2023-01-01',
            end_english_date : '2023-01-01',
            status : '1',
          },
          {
            id: '2',
            year: '2023',
            starting_nepali_date : '2079-01-01',
            starting_english_date : '2023-01-01',
            end_nepali_date : '2023-01-01',
            end_english_date : '2023-01-01',
            status : '1',
          }
      ]
        this.gridApi.setRowData(obj);
      // }
    // })
  }

  onAddClick(){
    this.mode = 'new'
    this.componentForm.patchValue({
      year:'',
      starting_nepali_date :'',
      starting_english_date :'',
      end_nepali_date :'',
      end_english_date :'',
      status :'',
    })
    this.onNewModeOpen();
  }

  onEditModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
    setTimeout(function(){ 
      me.componentForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
