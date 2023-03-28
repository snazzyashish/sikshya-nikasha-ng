import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';



@Component({
  selector: 'app-magform-setting-itemdetail',
  templateUrl: './magform-setting-itemdetail.component.html',
  styleUrls: ['./magform-setting-itemdetail.component.css']
})
export class MagformSettingItemdetailComponent {
  public cmpForm:FormGroup
  public magFormItemList:any = [];
  public registeredItemList : any = [];
  public detailIds : any = [];
  public magh_form_detail_ids:any;
  public id:any;
  public record:any
  constructor(public fb:FormBuilder, public api:ApiService, public router:Router, public route:ActivatedRoute, public toastify:AlertService){
    this.cmpForm = this.fb.group({
      itemList: this.fb.array([]) ,
    });
    // this.listMagFormDetailItems();
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewInfo();
  }
  
  getViewInfo(){
    let params = {
      id : this.id
    }
    this.api.viewMagformSetting(params).subscribe(res=>{
      this.magh_form_detail_ids = res.data.magh_form_detail_ids;
      this.listMagFormDetailItems();
      this.record = res.data;
      if(res.data.magh_form_detail_ids){
        this.detailIds = res.data.magh_form_detail_ids.split(',');
      }
      this.getDetailItems(res.data.magh_form_detail_ids);

    })
  }

  getDetailItems(magh_form_detail_ids:any){
    if(magh_form_detail_ids == null || magh_form_detail_ids == ''){
      return;
    }
    let params = {
      id : this.id,
      magh_form_detail_ids : this.magh_form_detail_ids
    }
    this.api.listMagformSettingDetail(params).subscribe(res=>{
      this.registeredItemList = res.data;
    })

  }

  listMagFormDetailItems(){
    let params = {
      id : this.id,
      magh_form_detail_ids : this.magh_form_detail_ids,
      filter : 'NOT IN'
    }
    this.api.listMagformSettingDetail(params).subscribe(res=>{
      this.magFormItemList = res.data
    })
  }
  onCheckboxSelectionChange(item:any,i:any){
    this.magFormItemList[i].checked =  !this.magFormItemList[i].checked
  }
  
  onRegisteredCheckboxSelectionChange(item:any,i:any){
    this.registeredItemList[i].checked =  !this.registeredItemList[i].checked
  }


  onAddItemClick(){
    for(let i in this.magFormItemList){
      if(this.magFormItemList[i].checked){
        this.detailIds.push(this.magFormItemList[i].id);
      }
    }
    this.onSaveClick();
  }
  onRemoveClick(){
    this.detailIds = [];
      let tempArr = this.arrayRemove(this.registeredItemList);
      for(let i in tempArr){
        this.detailIds.push(tempArr[i].id);
      }
    this.onSaveClick();
  }

  arrayRemove(arr:any) { 
    return arr.filter(function(ele:any){ 
        return ele.checked != true ; 
    });
}

  onSaveClick(){
    let params = {
      id : this.id,
      magh_form_detail_ids : this.detailIds.toLocaleString()
    }
    this.api.updateMagformSetting(params).subscribe(res=>{
      this.getViewInfo();
      this.listMagFormDetailItems();
      this.toastify.openSnackBar(res.message,'OK');
    })
  }

}
