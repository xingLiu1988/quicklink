import { ActivatedRoute, ParamMap  } from '@angular/router';
import { Post } from './../../models/post.model';
import { PostServiceService } from './../../services/post-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  public posts: Post[] = []; // hold all jobs
  receivedId: any = '';
  public post:any;
  constructor(private postService: PostServiceService, private router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.receivedId = this.router.snapshot.params['postId'];
    console.log("received id =" + this.receivedId);

    this.postService.getAllJobs().subscribe(data => {
      this.posts = data;


      console.log(this.posts);

      this.post = this.posts.filter(e => {
        console.log(e.postId);
        console.log(this.receivedId);
        return e.postId == this.receivedId;
      });// come back for this one 
      console.log(" aaa" + this.post[0].title);
    });
  }

  

}
