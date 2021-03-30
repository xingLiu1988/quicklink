import { Router } from '@angular/router';
import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogedIn: boolean = false;

  title = 'QuickLink';

  constructor(private shareData: ShareDataService, private router: Router) { }

  ngOnInit(): void {
    this.shareData.change.subscribe(status => this.isLogedIn = status);
  }

  public logout(): void{
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['home']);
  }
}
