import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpDetailFormComponent } from './emp-detail-form/emp-detail-form.component';
import { DemoformComponent } from './demoform/demoform.component';
import { UploadDocComponent } from './upload-doc/upload-doc.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailFormComponent,
    // DemoformComponent,
    // UploadDocComponent,
    LoginComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
