import {Role} from "./Role";

export class Regester {
  id: number | undefined;
  name: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  roles: Role = Role.USER;
}
