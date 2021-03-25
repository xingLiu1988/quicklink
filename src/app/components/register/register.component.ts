import { ClientMessage } from './../../models/client-message.model';
import { User } from './../../models/user.model';
import { RegisterServiceService } from './../../services/register-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'User Registration';
  password2: string = '';
  
  // For data binding
  public user: User = new User(0, '', '', '');

  // Client message to the user
  public clientMessage: ClientMessage = new ClientMessage('');

  constructor(private registerService: RegisterServiceService) { }


  public registerUserFromService(): void {

    // check if every field is filled
    if (!this.user.username || !this.user.password || !this.user.userRole) {
      this.clientMessage.message = "All FIELDS ARE REQUIRED";
      return;
    }
    // compare user.password === password2
    if(this.user.password !== this.password2){
      //this.warningText = "PASSWORD NOT MATCH";
      this.clientMessage.message = "PASSWORD DON'T MATCH";
      return;
    }
    this.registerService.registerUser(this.user).subscribe(data => this.clientMessage = data,
      error => this.clientMessage.message = "SOMETHING WENT WRONG");
  }

}
