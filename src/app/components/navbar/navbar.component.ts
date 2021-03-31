import { Router } from '@angular/router';
import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogedIn: boolean = false;

  // visitor login = 0
  // employee login = 1
  // employer login = 2
  userType: number = 0;

  title = 'QuickLink';

  constructor(private shareData: ShareDataService, private router: Router) {}

  ngOnInit(): void {
    this.shareData.change.subscribe((status) => {
      this.isLogedIn = status;
      const userString = sessionStorage.getItem('currentUser');
      const currentUser = JSON.parse(userString || '');
      if (currentUser.role === 'employee') {
        this.userType = 1;
        console.log(this.userType);
      } else if (currentUser.role === 'employer') {
        this.userType = 2;
        console.log(this.userType);
      } else {
        this.userType = 0;
        console.log(this.userType);
      }
    });
  }

  public logout(): void {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['home']);
  }
}
