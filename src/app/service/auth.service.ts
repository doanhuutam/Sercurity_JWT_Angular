import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtRespon} from "../model/jwt-respon";
import {Regester} from "../model/regester";
import {Login} from "../model/login";
import {environment} from "../../environments/environment.prod";
const TOKEN_KEY = 'Token_Key';
const NAME_KEY = 'Name_Key';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_SIGNUP = environment.API_LOCAL + 'signup';

  private API_SIGNIN = environment.API_LOCAL + 'signin';
  private API_CHANGE_PASSWORD = environment.API_LOCAL + 'change-password';
  private API_CHANGE_AVATAR = environment.API_LOCAL + 'change-avatar';
  private API_CHANGE_PROFILE = environment.API_LOCAL + 'change-profile';

  constructor(private http: HttpClient) {
  }

  register(register: Regester): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, register);
  }

  login(login: Login): Observable<JwtRespon> {
    return this.http.post<JwtRespon>(this.API_SIGNIN, login);
  }

  changePassword(info: any): Observable<JwtRespon> {
    return this.http.put<JwtRespon>(this.API_CHANGE_PASSWORD, info);
  }

  changeAvatar(info: any): Observable<JwtRespon> {
    return this.http.put<JwtRespon>(this.API_CHANGE_AVATAR, info);
  }

  changeProfile(info: any): Observable<JwtRespon> {
    return this.http.put<JwtRespon>(this.API_CHANGE_PROFILE, info);
  }

  public data: boolean | undefined;

  setData(data: boolean) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
  public getToken(): any {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getName(): any {
    return window.sessionStorage.getItem(NAME_KEY);
  }
  public setName(name: string){
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }
}
