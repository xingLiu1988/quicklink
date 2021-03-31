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
  public posts: Post[] = []; // hold all original jobs
  public copyOfPosts: Post[] = []; // used to hold filtered jobs

  public location:string = 'all';
  public cat:string = 'all';
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

  change():void {
    console.log('changed')
    if(this.cat !== 'all' && this.location !== 'all'){
      // when category not equal to all and location not equal to all
      this.copyOfPosts = this.posts.filter(e => e.category === this.cat && e.location === this.location);

    }else if(this.cat === 'all' && this.location != 'all'){
      // when category equal all and location not equal to all
      this.copyOfPosts = this.posts.filter(e => e.location === this.location);

    }else if(this.cat !== 'all' && this.location === 'all'){
      // when category not equal to all and location equal to all
      this.copyOfPosts = this.posts.filter(e => e.category === this.cat);

    }else {
      // when category equal to all and location equal to all
      this.copyOfPosts = this.posts;
    }
  }
}
