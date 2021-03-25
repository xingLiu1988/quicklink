export class Post {
  postId: number;
  companyName: string;
  jobTitle: string;
  location: string;
  salary: string;
  phoneNumber: number;
  description: string;

  userId: number; //store userId(id) of who applied this job
  employerId: number; //store employer id who post this job

  constructor(
    postId: number,
    companyName: string,
    jobTitle: string,
    location: string,
    salary: string,
    phoneNumber: number,
    description: string,
    userId: number,
    employerId: number
  ) {
    this.postId = postId;
    this.companyName = companyName;
    this.jobTitle = jobTitle;
    this.location = location;
    this.salary = salary;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.userId = userId;
    this.employerId = employerId;
  }
}
