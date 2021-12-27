import {Component, OnInit} from '@angular/core';
import {Login} from "../../model/login";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login = new Login("", "");
  hide = true;
  errorMessage: string = "";

  constructor(private auth: AuthService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.user).subscribe(data => {
      if (data.token != undefined) {
        this.auth.setToken(data.token)
        this.auth.setName(data.name)
      }
      this.route.navigate(['/views']).then(() => {
        window.location.reload();
      })
    })
  }
}
