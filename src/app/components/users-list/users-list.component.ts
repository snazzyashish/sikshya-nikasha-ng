import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement:any;

  dtOptions: DataTables.Settings = {};
  public columnDefs:any;
  constructor(){
  }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'assets/data/data.json',
      // scrollY: '400px',
      scrollX: true,
      columns: [
        {
        title: 'ID',
        data: 'id',
        }, 
        {
          title: 'Name',
          data: 'name'
        }, 
        {
          title: 'Account',
          data: 'account'
        },
        {
          title: 'Type',
          data: 'type'
        },
        {
          title: 'Principal',
          data: 'principal_name'
        },
        {
          title: 'Principal No',
          data: 'principal_no'
        },
    ]
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function (event:any) {
          if (that.search() !== event.target.value) {
            that
              .search(event.target.value)
              .draw();
          }
        });
      });
    });
  }
}
