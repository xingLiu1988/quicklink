import { Employer } from './../../models/employer.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  employer: Employer = new Employer('XXX', 'John', 'Doe', 'johnd@mail.com', 999-999-999, '111 Abs St.');

  constructor() { }

  ngOnInit(): void {
    
  }

}
