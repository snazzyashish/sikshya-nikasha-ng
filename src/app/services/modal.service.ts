import { Component, Type, Injectable } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from './api.service';

declare var userInfo :any; 

@Injectable({
  providedIn: 'root'
})
export class ModalService {
	constructor(public router : Router, private _modalService: NgbModal, public api:ApiService) {}

	open(content:any) {
		this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title', modalDialogClass:'' });
		
	}

	openLarge(content:any) {
		this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title', modalDialogClass:'modal-xl' });
		
	}
	close(action:any){
		this._modalService.dismissAll();
		if(action == 'logout'){
			this.api.logout({}).subscribe(res=>{
				if(res.success){
					localStorage.clear();
					this.router.navigate(['/login']);
				}
			})
			// window.location.replace("/login");
		}
	}
}
