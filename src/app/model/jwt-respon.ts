export class JwtRespon {
  public id: string;
  public token: string;
  public name: string;
  public roles: any[];
  public username: string;
  public email: string;

  constructor(id: string, token: string, name: string, roles: any[], username: string, email: string) {
    this.id = id;
    this.token = token;
    this.name = name;
    this.roles = roles;
    this.username = username;
    this.email = email;
  }
}
