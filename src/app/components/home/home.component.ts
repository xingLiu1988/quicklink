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

  constructor(private postService: PostServiceService) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts():void {
    this.postService.getAllJobs().subscribe(data =>{
      this.posts = data;
      this.copyOfPosts = this.posts;
    });
  }
}
