import { Post } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public posts: Post[] = [
    {
      postId: 0,
      companyName: 'company1',
      title: 'jobTitle1',
      category: 'restaurant',
      location: 'NY',
      salary: 0,
      phoneNumber: 0,
      description: '',
      employerId: 1
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
