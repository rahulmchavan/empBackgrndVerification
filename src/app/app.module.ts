import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpDetailFormComponent } from './emp-detail-form/emp-detail-form.component';
import { UploadDocComponent } from './upload-doc/upload-doc.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { myroute } from './route.config';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpDetailFormComponent,  
    UploadDocComponent,
    LoginComponent,
    ErrorComponent,
    EmployeeDetailComponent,
    EmployeeProfileComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
