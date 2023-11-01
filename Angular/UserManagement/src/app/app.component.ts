import { Component } from '@angular/core';
import { User } from './user';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usermanagement';
 

  constructor(public user:User)
  {}
  addAUser(){
    axios.post("http://localhost:9000/addUser",this.user,
    {headers:{'Content-Type':'application/json'}});
    window.alert("Trying to add a user");
  }
}
