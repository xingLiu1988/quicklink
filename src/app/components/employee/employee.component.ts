import { Employee } from './../../models/employee.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //employee: Employee = new Employee('', '', '', 0, '');
  // employee: Employee = new Employee('Jane', 'Doe', 'jdoe@mail.com', 0, 'abc');
  employee: Employee = new Employee(1, 'xing', 'liu', 'username', 'password', 'xingliu@email.com', 911, 'USA', 'employee');
  constructor() { }

  ngOnInit(): void {

  }



}
