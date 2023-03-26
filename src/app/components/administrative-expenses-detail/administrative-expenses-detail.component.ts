import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SITE_ADDRESS, SITE_NAGARPALIKA } from 'src/app/data/constants';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-administrative-expenses-detail',
  templateUrl: './administrative-expenses-detail.component.html',
  styleUrls: ['./administrative-expenses-detail.component.css']
})
export class AdministrativeExpensesDetailComponent {
  public id:any;
  public SITE_NAGARPALIKA = SITE_NAGARPALIKA;
  public SITE_ADDRESS = SITE_ADDRESS;
  public administrativeScale :any = [];
  public record : any;
  constructor(public api:ApiService, public route:ActivatedRoute, public router:Router, public toastify:AlertService){
    this.listAdministrationScale();
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewInfo();
  }

  getViewInfo(){
    let params = {
      id : this.id
    }
    this.api.viewAdministration(params).subscribe(res=>{
      this.record = res.data;
    })
  }

 setChecked(item:any){
  if(this.record.scale_ids == null || this.record.scale_ids == '' ){
    return false;
  }
  if(this.record.scale_ids.split(',').includes(JSON.stringify(item.id))){
    return true;
  }else{
    return false;
  }
 }

  listAdministrationScale(){
    this.api.listAdministrationScale({}).subscribe(res=>{
      if(res.success){
        this.administrativeScale = res.data;
      }
    })
  }

  onCheckboxSelectionChange(item:any,i:any){
    this.administrativeScale[i].checked =  !this.administrativeScale[i].checked
    // item.checked = !item.checked;
  }

  onSubmitClick(){
    let total = 0,
      scale_ids = [],
      item = this.administrativeScale;
    for(let i in item){
      if(item[i].checked){
        total+=parseInt(item[i].amount);
        scale_ids.push(item[i].id);
      }
    }
    let params = {
      id : this.id,
      total : total,
      scale_ids : scale_ids.toString()
    }
    this.api.updateAdministration(params).subscribe(res=>{
      if(res.success){
        this.toastify.openSnackBar(res.message, 'OK')
      }
    })
  }
}
