import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-magform-setting-itemdetail',
  templateUrl: './magform-setting-itemdetail.component.html',
  styleUrls: ['./magform-setting-itemdetail.component.css']
})
export class MagformSettingItemdetailComponent {
  public cmpForm:FormGroup
  public magFormItemList:any = [];
  public registeredItemList : any = [];
  constructor(public fb:FormBuilder){
    this.cmpForm = this.fb.group({
      itemList: this.fb.array([]) ,
    });
    this.magFormItemList = [
      {
        'id': '1',
        'name' : 'Test1'
      },
      {
        'id': '2',
        'name' : 'Test2'
      },
      {
        'id': '3',
        'name' : 'Test3'
      },
    ]
  }

  onAddItemClick(){
    debugger;
    // this.registeredItemList.push(item)
  }

}
