import{Routes} from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EmpDetailFormComponent } from './emp-detail-form/emp-detail-form.component'
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component'
import { ErrorComponent } from './error/error.component'
import { LoginComponent } from './login/login.component'
import { UploadDocComponent } from './upload-doc/upload-doc.component'
 
export const myroute:Routes=[
    {path:'login', component:LoginComponent},
    {path:'empdetailform', component:EmpDetailFormComponent},
    {path:'uploaddoc',component:UploadDocComponent},
    {path:'empdetail',component:EmployeeDetailComponent},
    {path:'profile',component:EmployeeProfileComponent},
    
    {path:'**',component:ErrorComponent}
]