import { Injectable } from '@angular/core';
import { ToastService } from 'angular-toastify';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../components/delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ToastifyService {

  constructor(private _toastService: ToastService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  addInfoToast() {
    this._toastService.success('message');
 }

 openSnackBar(message:any, action:any){
  this._snackBar.open(message, 'Clear', {
    duration: 3000
  });
 }

 openDialog(templateRef:any) {
  let dialogRef = this.dialog.open(templateRef, {
   width: '350px',
 });
}
}

