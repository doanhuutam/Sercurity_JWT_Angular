import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Product} from "../model/Product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) {
  }

  private API_CREATE = environment.API_PRODUCT + 'create';
  private API_SHOW = environment.API_PRODUCT + 'show';
  private API_UPDATE = environment.API_PRODUCT + 'update';
  private API_DELETE = environment.API_PRODUCT + 'delete';
  private API_SEACH = environment.API_PRODUCT + 'seach';

   createProduct(product:Product):Observable<any>{
    return this.http.post(this.API_CREATE,product)
  }
   showProduct():Observable<any>{
   return this.http.get(this.API_SHOW)
  }
   updateProduct(id:number,value:Product):Observable<any> {
    return this.http.put(`${this.API_UPDATE}/${id}`,value)
  }
  deleteProduct(id:number):Observable<any>{
     return this.http.delete(`${this.API_DELETE}/${id}`)
  }
  seachProduct(name:string):Observable<any>{
     return this.http.get<any>(`http://localhost:8080/product/seach/${name}`)
  }
  getProductById(id:number){
     return this.http.get(`http://localhost:8080/product/findById/${id}`)
  }
}
