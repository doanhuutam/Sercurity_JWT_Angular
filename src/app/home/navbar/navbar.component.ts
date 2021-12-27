import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  name: any;
  product: any;
  dataSource: any;
  isLogin: boolean = false;

  constructor(private http: HttpClient,
              private service: AuthService,
              private route: Router) {
  }

  ngOnInit(): void {
  }
}
