import { Component } from '@angular/core';
import { EmpManagementService } from './EmpManagementService';
import { ProjectMgServiceService } from './project-mg-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProjectMgServiceService],
})
export class AppComponent {
  title = 'structureddata';
  eId:number=1;

  constructor(private PmMgSvc:ProjectMgServiceService){}
  emplist=[
    {empId:1,firstName:"Kishore",lastName:"K",age:21,location:"Chennai"},
    {empId:2,firstName:"Yogesh",lastName:"R",age:21,location:"Chennai"},
    {empId:3,firstName:"Jhonny",lastName:"D'cruse",age:21,location:"Chennai"}, 
  ];

  empvc:EmpManagementService=new EmpManagementService() ;

  emp= {empId:5,firstName:"Kishore",lastName:"K",age:21,location:"Chennai"}

  addEmp(){

    this.empvc.addEmp(this.emp,this.emplist)
  }
  deleteEmp(){
    this.empvc.deleteEmp(this.eId,this.emplist);
  }
  addProject(){
    this.PmMgSvc.addProjects();
  }
  
  forLoops(){
    for(let i in this.emplist)
      console.log(i+"\t"+this.emplist[i].firstName,this.emplist[i].lastName)
    for(let i of this.emplist)
      console.log(i.empId+","+i.firstName)
  }

}
