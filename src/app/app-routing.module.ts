import { JobDetailsComponent } from './components/job-details/job-details.component';
import { EmployerComponent } from './components/employer/employer.component';
import { AboutComponent } from './components/about/about.component';
import { PostComponent } from './components/post/post.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileServiceService } from './services/profile-service.service';
import { LoginServiceService } from './services/login-service.service';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employer', component: EmployerComponent},
  {path: 'post', component: PostComponent},
  {path: 'about', component: AboutComponent},
  {path: 'job-details/:postId', component: JobDetailsComponent},
  {path: 'profile1', component: EmployeeComponent},
  {path: 'profile2', component: EmployerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
