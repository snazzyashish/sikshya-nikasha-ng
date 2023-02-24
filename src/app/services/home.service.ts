import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public pageHeader:any;
  constructor(public route:ActivatedRoute, public router:Router) { 
   
  }
  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.route.data.subscribe(params=>{
      });
  });
  }
}
