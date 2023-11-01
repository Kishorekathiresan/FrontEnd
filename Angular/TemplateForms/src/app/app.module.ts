import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmpManagementService } from './EmpManagementService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectMgServiceService } from './project-mg-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [EmpManagementService,ProjectMgServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
