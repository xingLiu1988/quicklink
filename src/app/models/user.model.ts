export class User {
  id: number;
  username: string;
  password: string;
  userRole: string;

  constructor(
    id: number,
    username: string,
    password: string,
    userRole: string
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.userRole = userRole;
  }
}
