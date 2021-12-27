import {Role} from "./Role";

export class Regester {
  id: number | undefined;
  name: string;
  username: string;
  email: string;
  password: string;
  roles: string[];

  constructor(name: string, username: string, email: string, password: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ['pm'];
  }
}
