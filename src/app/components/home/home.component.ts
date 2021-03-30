import { Router } from '@angular/router';
import { PostServiceService } from './../../services/post-service.service';
import { Post } from '../../models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public posts: Post[] = []; // hold all jobs
  public copyOfPosts: Post[] = []; // used to hold filtered jobs

  constructor(private postService: PostServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  // used to receive all jobs from db
  getAllPosts():void {
    this.postService.getAllJobs().subscribe(data =>{
      this.posts = data;
      console.log(this.posts);
      this.copyOfPosts = this.posts;
    });
  }

  // used to redirect to detail page when user click on jobs
  // gotoDetail(post: Post):void {
  //   console.log(post.postId);
  //   this.router.navigate(['job-details'])
  // }
}
