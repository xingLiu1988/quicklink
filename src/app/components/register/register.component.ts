import { ShareDataService } from './../../services/share-data.service';
import { ClientMessage } from './../../models/client-message.model';
import { User } from './../../models/user.model';
import { RegisterServiceService } from './../../services/register-service.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  title = 'User Registration';
  password2: string = '';

  isRegistered: boolean = false;

  // For data binding
  public user: User = new User(0, '', '', '');


  // Client message to the user
  public clientMessage: ClientMessage = new ClientMessage('');

  constructor(private registerService: RegisterServiceService, private router: Router, private shareData: ShareDataService) {}

  public registerUserFromService(): void {
    // check if every field is filled
    if (!this.user.username || !this.user.password || !this.user.role) {
      this.isRegistered = this.isRegistered;
      this.clientMessage.message = 'All FIELDS ARE REQUIRED';
      return;
    }
    
    // compare user.password === password2
    if (this.user.password !== this.password2) {
      //this.warningText = "PASSWORD NOT MATCH";
      this.isRegistered = this.isRegistered;
      this.clientMessage.message = "PASSWORD DON'T MATCH";
      return;
    }

    this.registerService.registerUser(this.user).subscribe(
      (data) => {
        // when it's failed 
        if(!data){
          this.isRegistered = this.isRegistered;
          this.clientMessage.message = "failed";
          return;
        }

        // when it's success
        this.isRegistered = !this.isRegistered;
        this.clientMessage = data;
        console.log('before to change');
        this.shareData.changeStatus(true);
        console.log('after to change');
        
        setTimeout(()=>{
          // check if it's a employee or employer
          if(this.user.role === 'employee'){
            this.router.navigate(['employee']);
          }else{
            this.router.navigate(['employer']);
          }
        }, 2000)
      },
      (error) => (this.clientMessage.message = 'SOMETHING WENT WRONG')
    );
  }
}
