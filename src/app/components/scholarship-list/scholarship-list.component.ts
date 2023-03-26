import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { TABLE_CONFIG } from 'src/app/data/constants';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';


declare var $ : any;
@Component({
  selector: 'app-scholarship-list',
  templateUrl: './scholarship-list.component.html',
  styleUrls: ['./scholarship-list.component.css']
})
export class ScholarshipListComponents implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  cmpForm: FormGroup;
  public mode = 'new';
  public showSearchForm:boolean = false;
  public tableConfig = TABLE_CONFIG;
  public schoolList:any = [];
  ngAfterViewInit() {
    
  }

  constructor(public router:Router, public modal:ModalService ,public fb:FormBuilder, public api:ApiService, public toastify:AlertService){
    this.cmpForm =  this.fb.group({
      id: [''],
      school: [''],
      year  : [''], 
      account : [''], 
      total : [''], 
      remark : [''], 
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
        hide : true
      },
      {
        headerName : 'क्र. सं.',
        field : '',
        width : 70,
        sortingOrder : ['asc','desc'],
        filter:true,
        hide : true
      },
      {
        headerName : 'विद्यालय',
        field : 'school',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Year',
        field : 'year',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'खाता नम्बर',
        field : 'account',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'जम्मा',
        field : 'total',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'कैफियत',
        field : 'remark',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      }
    ]

    this.getSchoolList();
  }

  onFormHeaderClick(){
    this.showSearchForm = !this.showSearchForm;
  }

  // onFormSubmit(){
  //   this.showSearchForm = !this.showSearchForm;
  // }

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
    this.api.listScholarship({}).subscribe(res=>{
      if(res.success){
        this.gridApi.setRowData(res.data);
      }
    })
  }

  onAddClick(){
    this.mode = 'new'
    this.cmpForm.patchValue({
      id: '',
      school: '',
      year  : '', 
      account : '', 
      total : '', 
      remark : ''
    })
    this.onNewModeOpen();
  }

  onEditModeOpen(id:any){
    this.mode = 'edit';
    var me = this;
    // this.router.navigate(['/employee-detail/update/'+id]);
    this.modal.open(this.modalContent);
    setTimeout(function(){ 
      me.cmpForm.patchValue(me.gridApi.getSelectedRows()[0]);
    }, 50);
  }
  onViewModeOpen(id:any){
    var me = this;
    this.router.navigate(['/employee-detail/view/'+id]);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }

  onFormSubmit(){
    if(this.mode == 'edit'){
      let params = {
        
      }
      this.api.updateScholarship(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
          // this.router.navigate(['scholarship/list']);
          this.modal.close('')
          this.loadGridData();
          
        }else{
          this.toastify.openSnackBar(res.message,'ERROR');
        }
      })
    }else{
      this.api.saveScholarship(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
          // this.router.navigate(['scholarship/list']);
          this.modal.close('')
          this.loadGridData();
          
        }else{
          this.toastify.openSnackBar(res.message,'ERROR');
        }
      })
    }
    // this.toast.openSnackBar('Saved','OK');
    // this.router.navigate(['schools-list']);
  }

  getSchoolList(){
    this.api.listSchools({}).subscribe(res=>{
      if(res.data){
        this.schoolList = res.data;
      }
    })
  }
}
