import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-seach-product',
  templateUrl: './seach-product.component.html',
  styleUrls: ['./seach-product.component.css']
})
export class SeachProductComponent implements OnInit {
  name: any;
  product:any;
  displayedColumns: string[] = ['id', 'name', 'img', 'price', 'npp', 'edit', 'remove'];
  dataSource: any;
  idProduct: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;


  constructor(private service:ProductService,
              private router:ActivatedRoute,
              private http:HttpClient,
              private route:Router) {
  }

  ngOnInit(): void {
    this.name = this.router.snapshot.paramMap.get('name');
    this.dataSource = new MatTableDataSource<any>(this.product);
    this.dataSource.paginator = this.paginator;
  }

  seachProduct() {
    this.service.seachProduct(this.name).subscribe(data =>
      this.product = data
    )
  }
  getIdProduct(id: any) {
    this.idProduct = id;
  }

  editProduct(id:number) {
    this.route.navigate(['edit',id])
  }

  deleteProduct(id: number) {
    if (
      confirm('bạn có muốn xoá không')) {
      this.http.delete(`http://localhost:8080/product/deleteProduct/${id}`).subscribe((data) => {
        alert('ok');
        this.ngOnInit();
      })
      this.ngOnInit();
    }

  }
}
