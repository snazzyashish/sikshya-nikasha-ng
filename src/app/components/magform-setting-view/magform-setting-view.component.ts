import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SITE_ADDRESS, SITE_NAGARPALIKA } from 'src/app/data/constants';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';




@Component({
  selector: 'app-magform-setting-view',
  templateUrl: './magform-setting-view.component.html',
  styleUrls: ['./magform-setting-view.component.css']
})
export class MagformSettingViewComponent {
  public record:any;
  public id:any;
  private gridApi:any;
  public columnDefs:any;
  private gridColumnApi:any;
  constructor(public api:ApiService, public route:ActivatedRoute, public router:Router, public toastify:AlertService){
    this.columnDefs=[
      // {
      //   headerName : 'Action',
      //   field: 'id',
      //   width : 150,
      //   suppressNavigable: true,
      //   cellClass: 'no-border',
      //   cellRenderer: ActionButtonsComponent,
      //   cellRendererParams: {
      //     clicked: (id: any, type:any) => {
      //       if(type == 'edit'){
      //         // this.onEditModeOpen();
      //       }else  if(type == 'view'){
      //         // this.onViewModeOpen(id);
      //       }
      //     }
      //   },
      // },
      {
        headerName : 'ID',
        field : 'id',
        width : 70,
        sortingOrder : ['asc','desc'],
        filter:true,
        hide:false
      },
      {
        headerName : 'Magform Item',
        field : 'name',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter : true
      },
      {
        headerName : 'Year',
        field : 'year',
        width : 200,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Month',
        field : 'month',
        width : 200,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Type',
        field : 'type',
        width : 200,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
        filter: 'agTextColumnFilter',
      },
      {
        headerName : 'Status',
        field : 'status',
        width : 150,
        sortingOrder : ['asc','desc'],
        editable: true,
        floatingFilter : true,
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
      },
    ]
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewInfo();
  }

  getViewInfo(){
    let params = {
      id : this.id
    }
    this.api.viewMagformSetting(params).subscribe(res=>{
      this.record = res.data;
      this.loadGrid(res.data.magh_form_detail_ids);
    })
  }

  onGridReady(params:any){
    // this.getGroups();
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.loadGrid();
  }

  loadGrid(magh_form_detail_ids:any){
    let params = {
      id : this.id,
      magh_form_detail_ids : magh_form_detail_ids
    }
    this.api.listMagformSettingDetail(params).subscribe(res=>{
      // if(res.success){
        this.gridApi.setRowData(res.data);
      // }
    })
  }
}
