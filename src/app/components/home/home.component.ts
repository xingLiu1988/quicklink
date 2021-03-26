import { Post } from './../../models/post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Post[] = [
    {postId: 1, companyName: 'company1', jobTitle: 'java developer', location: 'NY', salary: '500/day', phoneNumber: 911, description: 'come and join us1',postDate: 'DEC 30 2021', userId: 0, employerId: 1},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12},
    {postId: 2, companyName: 'company2', jobTitle: 'java developer2', location: 'FL', salary: '600/day', phoneNumber: 912, description: 'come and join us2',postDate: 'DEC 30 2021', userId: 0, employerId: 12}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
