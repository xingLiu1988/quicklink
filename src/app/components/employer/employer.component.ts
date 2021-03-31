import { PostServiceService } from './../../services/post-service.service';
import { Post } from './../../models/post.model';
import { ClientMessage } from './../../models/client-message.model';
import { ProfileServiceService } from './../../services/profile-service.service';
import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  employee: Employee = new Employee(0, '', '', '', '', '', '', '', 'employer');

  infoCompleted: boolean = false;

  myPosts: Post[] = []; // used to hold current user posts

  public clientMessage: ClientMessage = new ClientMessage('');

  constructor(private profileService: ProfileServiceService, private postService: PostServiceService) { }

  ngOnInit(): void {
    this.validateEmployee();
    this.showMyPosts();
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

  showMyPosts(): void{
    this.postService.getAllJobs().subscribe(data => {
      this.myPosts = data.filter(e => e.employerId === this.employee.id);
    })
  }
}
