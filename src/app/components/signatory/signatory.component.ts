import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { TABLE_CONFIG } from 'src/app/data/constants';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-signatory',
  templateUrl: './signatory.component.html',
  styleUrls: ['./signatory.component.css']
})
export class SignatoryComponent {
  @ViewChild('content') modalContent!: ElementRef;
  @ViewChild('confirmDialog') confirmDialog!: ElementRef;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  public mode:any = 'new';
  cmpForm: FormGroup;
  public tableConfig = TABLE_CONFIG;
  ngAfterViewInit() {
    
  }

  constructor(public modal:ModalService ,public fb:FormBuilder, public alert: AlertService, public api:ApiService){
    this.cmpForm =  this.fb.group({
      id: [''],
      name: ['', Validators.required],
      post : ['', Validators.required], 
      signature : ['', Validators.required], 
      status : ['', Validators.required], 
    });

    this.columnDefs=[
      {
        headerName : 'Action',
        field: 'id',
        width : 110,
        suppressNavigable: true,
        cellClass: 'no-border',
        cellRenderer: ActionButtonsComponent,
        cellRendererParams: {
          clicked: (id: any, type:any) => {
            if(type == 'edit'){
              this.onEditModeOpen();
            }else if(type=='delete'){
              // this.alert.openSnackBar('Deleted','OK')
              this.alert.openDialog(this.confirmDialog)
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
        suppressNavigable: true,
        cellClass: 'no-border'
      },
      {
        headerName : 'Name',
        field : 'name',
        width : 250,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Post',
        field : 'post',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
      },
      {
        headerName : 'Signature',
        field : 'signature',
        width : 200,
        sortingOrder : ['asc','desc'],
        editable: true,
      },
      {
        headerName : 'Status',
        field : 'status',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        cellRenderer: (params:any) => {
          if(params.value == '1'){
            return 'Active';
          }else if(params.value == '0'){
            return 'Inactive';
          }else{
            return params.value;
          }
        }
      }
    ]
  }

  onEditModeOpen(){
    this.mode = 'edit'
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
  onGridReady(params:any){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.loadGrid();
  }
  loadGrid(){
    this.api.listSignature({}).subscribe(res=>{
      if(res.success){
        this.gridApi.setRowData(res.data);
      }
    })
  }
  onSaveClick(){
    this.alert.openSnackBar('Saved','OK')
  }

  onAddClick(){
    this.mode = 'new'
    this.cmpForm.patchValue({
      id:'',
      name: '',
      signature : '', 
      post : '', 
      status : '', 
    })
    this.onNewModeOpen();
  }

  onFormSubmit(){
    if(this.mode == 'edit'){
      let params = {
        
      }
      this.api.updateSignature(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message,'OK');
          // this.router.navigate(['scholarship/list']);
          this.modal.close('')
          this.loadGrid();
          
        }else{
          this.alert.openSnackBar(res.message,'ERROR');
        }
      })
    }else{
      this.api.saveSignature(this.cmpForm.value).subscribe(res=>{
        if(res.success){
          this.alert.openSnackBar(res.message,'OK');
          // this.router.navigate(['scholarship/list']);
          this.modal.close('')
          this.loadGrid();
          
        }else{
          this.alert.openSnackBar(res.message,'ERROR');
        }
      })
    }
    // this.toast.openSnackBar('Saved','OK');
    // this.router.navigate(['schools-list']);
  }
 
}
