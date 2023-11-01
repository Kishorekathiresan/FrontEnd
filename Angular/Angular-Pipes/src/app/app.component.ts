import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpipes';
  firstName:string="Kishore";
  lastName:string="K"
  joinDate:any=new Date();
  salary:number=20000.6783;
  currencysymbol:string="INR";

}
