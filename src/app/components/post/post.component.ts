import { Router } from '@angular/router';
import { ClientMessage } from './../../models/client-message.model';
import { PostServiceService } from './../../services/post-service.service';
// import { Post } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';
import {PostNoId} from './../../models/postNoId.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  warningText?: string;

  constructor(private postService: PostServiceService, private router: Router) {}
  public clientMessage: ClientMessage = new ClientMessage('');
  // public post: Post = new Post(0, '', '', '', '', 0, 0, '', 0);
  // public post2: PostNoId = new PostNoId('', '', '', '', 0, 0, '', 0, 0);
  public post2: PostNoId = new PostNoId('', '', '', '', 0, '', '', 0, 0);

  ngOnInit(): void {
    this.getCurrentUser(); //get current employerId
  }

  //employer needs to login to post, and we will fetch current employerId
  public getCurrentUser(): void {}

  public postJob(): void {
    // STEP 1: validate all info employer enter is ok
    if (
      !this.post2.companyName ||
      !this.post2.title ||
      !this.post2.salary ||
      !this.post2.phoneNumber ||
      !this.post2.description
    ) {
      this.warningText = 'Please fill out everything in the form';
      return;
    }

    // STEP 2: get current employee id
    const userString = sessionStorage.getItem('currentUser');
    const currentUser = JSON.parse(userString || '');
    console.log(currentUser);
    this.post2.employerId = currentUser.id;
    // STPE 2: send post to the postService
    this.postService.postJob(this.post2).subscribe(
      (data) => {
        this.clientMessage = data;
        this.post2 = new PostNoId('', '', '', '', 0, '', '', 0, 0);
        setTimeout(()=>{
          this.router.navigate(['home']);
        }, 2000)
      },
      (error) => (this.warningText = 'SOMETHING WENT WRONG!')
    );
  }
}
