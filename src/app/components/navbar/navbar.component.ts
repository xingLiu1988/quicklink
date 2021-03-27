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

  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.shareData.change.subscribe(status => this.isLogedIn = status);
  }

}
