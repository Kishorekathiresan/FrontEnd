import { Component } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  deptlist:any=[{deptId:'PR',deptName:'Public Relations'},
{deptId:'RD',deptName:'Research & Development'},
{deptId:'CSR',deptName:'Corporate School Responsibility'},
]
}
