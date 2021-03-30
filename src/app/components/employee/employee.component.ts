import { ClientMessage } from './../../models/client-message.model';
import { ProfileServiceService } from './../../services/profile-service.service';
import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee = new Employee(0, '', '', '', '', '', '', '', 'employee');

  infoCompleted: boolean = false;

  public clientMessage: ClientMessage = new ClientMessage('');

  constructor(private profileService: ProfileServiceService) { }

  ngOnInit(): void {
    this.validateEmployee();
  }


  public updateEmployeeInfo(): void {
    this.profileService.updateEmployee(this.employee).subscribe(data => {
      if(data){
        this.clientMessage.message = "Success";
        this.infoCompleted = true;
      }
    },
      error => this.clientMessage.message = "SOMETHING WENT WRONG!");
  }

  validateEmployee():void {
    // get current user
    const userString =  sessionStorage.getItem('currentUser');
    const currentUser = JSON.parse(userString || '');
    console.log(currentUser);

    // set current user
    this.employee = currentUser;

    // check if set up info 
    if(!currentUser.firstName){
      this.infoCompleted = false;
    }else {
      this.infoCompleted = true;
    }
  }
}
