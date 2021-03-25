import { PostServiceService } from './../../services/post-service.service';
import { Post } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  warningText?: string;

  constructor(private postService: PostServiceService) { }

  public post: Post = new Post(0, '', '', 'AL', '', 0, '', 0, 0);

  ngOnInit(): void {
    this.getCurrentUser();//get current employerId
  }

  //employer needs to login to post, and we will fetch current employerId
  public getCurrentUser():void {

  }

  public postJob():void {
    // STEP 1: validate all info employer enter is ok
    if(!this.post.companyName || !this.post.jobTitle || !this.post.salary || !this.post.phoneNumber || !this.post.description){
      this.warningText = 'Please fill out everything in the form';
    }

    // STPE 2: send post to the postService
    this.postService.postJob(this.post).subscribe(data => this.warningText = data, error => this.warningText = "SOMETHING WENT WRONG!");
  }
}
