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
  {path: 'profile', component: EmployeeComponent},
<<<<<<< HEAD
  {path: 'post', component: PostComponent},
  {path: 'about', component: AboutComponent}
  
=======
  {path: 'post', component: PostComponent}
>>>>>>> 213d5b9501bbdcfc3fde26bbdd95e17ed40a9481
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
