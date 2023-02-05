import { Component, AfterViewInit } from '@angular/core';

declare var $ : any;
@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements AfterViewInit {
  constructor(){

  }

  ngAfterViewInit(): void {
  //   $('#example').DataTable({
  //     columnDefs: [
  //         {
  //             targets: [0],
  //             orderData: [0, 1],
  //         },
  //         {
  //             targets: [1],
  //             orderData: [1, 0],
  //         },
  //         {
  //             targets: [4],
  //             orderData: [4, 0],
  //         },
  //     ],
  // })
  }
}
