export class Post {
  postId: number;
  companyName: string;
  title: string;
  category: string;
  location: string;
  salary: number; // changed to number
  phoneNumber: number;
  description: string;
   //store userId(id) of who applied this job
  employerId: number; //store employer id who post this job

  constructor(
    postId: number,
    companyName: string,
    title: string,
    category: string,
    location: string,
    salary: number, // changed to number
    phoneNumber: number,
    description: string,
    
    employerId: number
  ) {
    this.postId = postId;
    this.companyName = companyName;
    this.title = title;
    this.category = category;
    this.location = location;
    this.salary = salary;
    this.phoneNumber = phoneNumber;
    this.description = description;
    
    this.employerId = employerId;
  }
}
