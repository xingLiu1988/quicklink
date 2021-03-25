import { LoginServiceService } from './../../services/login-service.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService: LoginServiceService) { }

  warningText = ""; 
  receivedUser?: User;

  public user: User = new User(0, '', '', '');


  ngOnInit(): void {
  }

  public login(): void {
    console.log('submit button is clicked');
    // validate user input
    if(!this.user.userRole || !this.user.username || !this.user.password){
      this.warningText = "Please enter all required field";
      console.log('inside')
      return;
    }

    // cal login in service
    this.loginService.login(this.user).subscribe(data => this.receivedUser = data, error => this.warningText = 'login failed');
  }

}
