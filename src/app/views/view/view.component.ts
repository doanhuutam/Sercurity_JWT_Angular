import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/Product";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'img', 'price', 'npp', 'edit', 'remove'];
  dataSource: any;
  name: any;
  @Input() product: any;
  idProduct: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private service: ProductService,
              private http: HttpClient,
              private route: Router,
              private notificationService: NotificationService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getProduct();
  }
  //lấy danh sách sản phẩm
  getProduct() {
    this.http.get<Product[]>('http://localhost:8080/product/seach?name=').subscribe(data => {
      this.product = data;
      this.dataSource = new MatTableDataSource<any>(this.product);
      this.dataSource.paginator = this.paginator;
    })
  }
// tìm kiếm sản phẩm theo tên
  getProduct1() {
    this.http.get<Product[]>('http://localhost:8080/product/seach?name=' + this.name).subscribe(data => {
      this.product = data;
      this.dataSource = new MatTableDataSource<any>(this.product);
      this.dataSource.paginator = this.paginator;
    })
  }
  //lấy id sản phẩm
  getIdProduct(id: any) {
    this.idProduct = id;
  }
  //chuyển hướng
  editProduct(id: number) {
    this.route.navigate(['edit', id])
  }
  //chuyển hướng
  addProduct(){
    this.route.navigate(['add'])
  }
  //xoá sản phẩm sử dụng thông báo notification
  deleteProduct(id: number) {
    if (
      confirm('bạn có muốn xoá không')) {
      this.http.delete(`http://localhost:8080/product/deleteProduct/${id}`).subscribe((data) => {
        this.notificationService.showNoficatiton();
        this.ngOnInit();
      })
      this.ngOnInit();
    }
  }

  // seachProduct() {
  //   this.service.seachProduct().subscribe(data =>
  //     this.product = data
  //   )
  // }
}
