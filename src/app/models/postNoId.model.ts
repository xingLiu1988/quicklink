export class PostNoId {
  companyName: string;
  title: string;
  category: string;
  location: string;
  salary: number; // changed to number
  phoneNumber: string;
  description: string;
  //store userId(id) of who applied this job
  employerId: number; //store employer id who post this job
  employeeId: number;

  constructor(
    companyName: string,
    title: string,
    category: string,
    location: string,
    salary: number, // changed to number
    phoneNumber: string,
    description: string,
    employerId: number,
    employeeId: number
  ) {
    this.companyName = companyName;
    this.title = title;
    this.category = category;
    this.location = location;
    this.salary = salary;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.employeeId = employeeId;
    this.employerId = employerId;
  }
}
