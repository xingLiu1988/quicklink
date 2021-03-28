import { ShareDataService } from './../../services/share-data.service';
import { LoginServiceService } from './../../services/login-service.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginServiceService, private router: Router, private shareData: ShareDataService) {}

  warningText = '';
  receivedUser?: User;

  public user: User = new User(0, '', '', '');

  ngOnInit(): void {}

  public login(): void {
    console.log('submit button is clicked');
    // validate user input
    if (!this.user.role || !this.user.username || !this.user.password) {
      this.warningText = 'Please enter all required field';
      console.log('inside');
      return;
    }

    // cal login in service
    this.loginService.login(this.user).subscribe(
      (data) => {
        // if user enter wrong information
        if(!data){
          this.warningText = "OH MY GOD, INCORRECT INFOMATION....";

        // if user enter correct information
        }else{
          this.warningText = "OH MY GOD, You ENTER THE CORRECT INFORMATION, GIVE ME 3 SECONDS, I WILL TAKE YOU TO ANOTHER PAGE";
          // save current user
          sessionStorage.setItem("currentUser", JSON.stringify(data));

          // change login status to true
          this.shareData.changeStatus(true);
          
          //check what type of user is
          if(data.role === "employee"){
            this.router.navigate(['employee']);
          }else{
            this.router.navigate(['employer']);
          }
          
          this.receivedUser = data;
          console.log(this.receivedUser);
        }
      },
      (error) => (this.warningText = 'login failed')
    );
  }
}
