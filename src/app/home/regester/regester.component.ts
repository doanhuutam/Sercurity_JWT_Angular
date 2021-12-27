import {Component, OnInit} from '@angular/core';
import {Regester} from "../../model/regester";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {
  user: Regester = new Regester('','','','')
  ;
  errorMessage: string = "";
  hide = true;

  constructor(private auth: AuthService,
              private route: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.user).subscribe(data => {
      console.log(data)
      this.route.navigate(['/login']);
    })
  }
}
