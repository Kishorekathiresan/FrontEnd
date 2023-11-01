import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms1';

  frmGroup=new FormGroup({
    firstName:new FormControl('unknnown',[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl('unknown',[Validators.required,Validators.minLength(5)]),
    age:new FormControl(18,[Validators.min(18),Validators.max(69),Validators.required]),
    email:new FormControl('email',Validators.email),

  },
  {
    updateOn:'blur'
  }
  );
  processData(){
    alert("Submitted...")
    console.log(this.frmGroup.value);
  }
}
