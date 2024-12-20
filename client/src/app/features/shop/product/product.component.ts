import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from "../../../core/services/shop.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../../shared/models/products";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  private shopService = inject(ShopService);
  private activatedRoute = inject(ActivatedRoute);
  
  product?:Product;
  
  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;
    
    this.shopService.getProduct(+id).subscribe(response => this.product=response);
  }
  
}
