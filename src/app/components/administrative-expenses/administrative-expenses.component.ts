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
  selector: 'app-administrative-expenses',
  templateUrl: './administrative-expenses.component.html',
  styleUrls: ['./administrative-expenses.component.css']
})
export class AdministrativeExpensesComponent implements AfterViewInit {
  @ViewChild('content') modalContent!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  cmpForm: FormGroup;
  public mode = 'new';
  public showSearchForm:boolean = false;
  public schoolList:any
  public tableConfig = TABLE_CONFIG;
  ngAfterViewInit() {
    
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
        field : 'remarks',
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
      this.api.updateAdministration(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
          this.router.navigate(['administrative-expenses-detail/'+res.id]);
          this.modal.close('')
          this.loadGrid();
          
        }else{
          this.toastify.openSnackBar(res.message,'ERROR');
        }
      })
    }else{
      this.api.saveAdministration(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.toastify.openSnackBar(res.message,'OK');
          this.router.navigate(['administrative-expenses-detail/'+res.id]);
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

  getSchoolList(){
    this.api.listSchools({}).subscribe(res=>{
      this.schoolList = res.data;
    })
  }

  loadGrid(){
    this.api.listAdministration({}).subscribe(res=>{
      // if(res.success){
        // this.storeName = res.store_name;
        this.gridApi.setRowData(res.data);
      // }
    })
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
    this.router.navigate(['/administrative-expenses-detail/'+id]);
    // this.modal.open(this.modalContent);
    // setTimeout(function(){ 
    //   me.cmpForm.patchValue(me.gridApi.getSelectedRows()[0]);
    // }, 50);
  }
  onViewModeOpen(id:any){
    var me = this;
    // this.router.navigate(['/employee-detail/view/'+id]);
  }

  onNewModeOpen(){
    var me = this;
    this.modal.open(this.modalContent);
  }

  onSchoolSelectionChange(){
    let school_id = this.cmpForm.value.school_id;
    for(let i in this.schoolList){
      debugger;
      if(this.schoolList[i].id == school_id){
        this.cmpForm.patchValue({
          school : this.schoolList[i].school,
          account : this.schoolList[i].account_no
        })
      }
    }
  }
}
