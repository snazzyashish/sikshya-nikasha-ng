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
  selector: 'app-insfrastructure-list',
  templateUrl: './insfrastructure-list.component.html',
  styleUrls: ['./insfrastructure-list.component.css']
})
export class InfrastructureListComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  cmpForm: FormGroup;
  public mode = 'new';
  public showSearchForm:boolean = false;
  public tableConfig = TABLE_CONFIG;
  public schoolList:any

  ngAfterViewInit() {
    
  }

  getSchoolList(){
    this.api.listSchools({}).subscribe(res=>{
      this.schoolList = res.data;
    })
  }

  constructor(public router:Router, public modal:ModalService ,public fb:FormBuilder, public api:ApiService, public toastify:AlertService){
    this.cmpForm =  this.fb.group({
      id: [''],
      school: ['', Validators.required],
      school_id: ['', Validators.required],
      finacialyear : ['', Validators.required], 
      account : ['', Validators.required], 
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
        field : 'account',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Amount',
        field : 'total',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Remarks',
        field : 'remark',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      
    ]
    this.getSchoolList();

  }

  onFormHeaderClick(){
    this.showSearchForm = !this.showSearchForm;
  }

  onFormSubmit(){
    if(this.mode == 'edit'){
      let params = {
        
      }
      this.api.updateInfrastructure(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
          this.router.navigate(['infrastructure-expenses-detail/'+res.id]);
          this.modal.close('')
          this.loadGrid();
          
        }else{
          this.toastify.openSnackBar(res.message,'ERROR');
        }
      })
    }else{
      this.api.saveInfrastructure(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
          this.router.navigate(['infrastructure-expenses-detail/'+res.id]);
          this.modal.close('')
          this.loadGrid();
          
        }else{
          this.toastify.openSnackBar(res.message,'ERROR');
        }
      })
    }
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
    this.api.listInfrastructure({}).subscribe(res=>{
      // if(res.success){
        this.gridApi.setRowData(res.data);
      // }
    })
  }

  onSchoolSelectionChange(){
    let school_id = this.cmpForm.value.school_id;
    for(let i in this.schoolList){
      if(this.schoolList[i].id == school_id){
        this.cmpForm.patchValue({
          school : this.schoolList[i].school,
          account : this.schoolList[i].account_no
        })
      }
    }
  }

  onAddClick(){
    this.mode = 'new'
    this.cmpForm.patchValue({
      id:'',
      school: '',
      school_id: '',
      account : '', 
      finacialyear : ''
    })
    this.onNewModeOpen();
  }

  onEditModeOpen(id:any){
    var me = this;
    this.router.navigate(['/infrastructure-expenses-detail/'+id]);
  }
  onViewModeOpen(id:any){
    var me = this;
    this.router.navigate(['/infrastructure-expenses-detail/'+id]);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }
}
