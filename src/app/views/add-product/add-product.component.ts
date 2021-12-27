import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: any = {};
  product: any;
  fileName = '';


  constructor(private http: HttpClient,
              private route: Router,
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.http.post('http://localhost:8080/product/create', this.form).subscribe(data => {
      this.product = data;
      this.route.navigate(["views"])
    })
  }

  uploadFile($event: string) {
    this.form.img = $event
  }
}

