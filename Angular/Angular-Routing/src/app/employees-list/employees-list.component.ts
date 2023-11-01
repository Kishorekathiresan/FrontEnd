import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  emplist:any=[{empId:'100',firstName:'Gaurav',lastName:'Akash'},
  {empId:'101',firstName:'Kishore',lastName:'K'},
  {empId:'102',firstName:'Yogesh',lastName:'R'},

  ]
}
