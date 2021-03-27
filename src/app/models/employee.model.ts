export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: number;
  address: string;
  role: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
    phoneNumber: number,
    address: string,
    role: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.role = role;
  }
}
