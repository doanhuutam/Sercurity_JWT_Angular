import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any;
  id: any;

  constructor(private http: HttpClient,
              private route: Router,
              private router: ActivatedRoute,
              private service: ProductService) {
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.service.getProductById(this.id).subscribe(data=>{
      this.product=data;
    });
  }

  submit() {
    this.http.put(`http://localhost:8080/product/update/${this.id}`,this.product).subscribe(data=>{
      this.product=data;
    })
    this.route.navigate(['views']).then(()=>{
      window.location.reload()
    });
  }

  edit($event: string) {
    this.product.img=$event
  }
}
