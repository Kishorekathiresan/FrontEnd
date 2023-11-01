import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:string="Unknown";
  lastName:string="Unknown";
  age:number=22;
  salary:number=20000;
  gender:string="Male";
  favColor:string="blue";
  enabled:boolean=false;
  isDisplayed:boolean=true;
  YesNo:boolean=true;
  location:string="Jaipur";
  favTheme:string="theme3";
  background:boolean=true;
  title = 'databinding';

  name:string[]=["Bhargav","Gaurav","Preethi","Sangeeth","swati Jaiswal","pawan kumar reddy","jothi"]

  
  save() {
    var message="Thank You Mr/Mrs"+ this.firstName+""+this.lastName;
    message +=".Your Application will be processed shortly.";
    window.alert(message)
    
  }
  verifyFirstName(fname: any){
    if(fname.target.value=="")
    window.alert("FirstName must not be empty....")
  }
}
