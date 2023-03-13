import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent {
  constructor(public alert:AlertService){

  }

  onConfirmClick(){
    this.alert.messageSource.next(true);
  }
}
