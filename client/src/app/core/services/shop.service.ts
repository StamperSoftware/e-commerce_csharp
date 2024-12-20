import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Pagination } from "../../shared/models/pagination";
import { Product } from "../../shared/models/products";
import { ShopParams } from "../../shared/models/shopParams";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:5001/api'
  private http = inject(HttpClient);
  
  types:string[] = [];
  brands:string[] = [];
  
  getProducts(shopParams:ShopParams){
    
    let params = new HttpParams();
    
    if (shopParams.brands?.length) {
      params = params.append('brands', shopParams.brands.join(','))
    }
    
    if (shopParams.types?.length) {
      params = params.append('types', shopParams.types.join(','))
    }
    
    if (shopParams.sort) {
      params = params.append('sort', shopParams.sort);
    }
    
    if (shopParams.pageNumber) {
      params = params.append('pageIndex', shopParams.pageNumber);
    }
    
    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }
    
    params = params.append('pageSize', shopParams.pageSize);
    
    return this.http.get<Pagination<Product>>(`${this.baseUrl}/products`, {params});
  }
  
  getBrands(){
    
    if (this.brands.length) return this.brands;
    
    return this.http.get<string[]>(`${this.baseUrl}/products/brands`).subscribe({
      next: response => this.brands = response,
    })
  }
  getTypes(){
    if (this.types.length) return this.types;
    return this.http.get<string[]>(`${this.baseUrl}/products/types`).subscribe({
      next: response => this.types = response,
    })
  }
}
