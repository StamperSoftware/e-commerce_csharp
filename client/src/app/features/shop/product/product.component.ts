import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from "../../../core/services/shop.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../../shared/models/products";
import { CurrencyPipe } from "@angular/common";
import { CartService } from "../../../core/services/cart.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  private shopService = inject(ShopService);
  private activatedRoute = inject(ActivatedRoute);
  cartService = inject(CartService);
  product?:Product;
  quantity = 1;
  
  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;
    
    this.shopService.getProduct(+id).subscribe(response => this.product=response);
  }
  
}
