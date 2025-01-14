import { Component, inject, input } from '@angular/core';
import { CartItem } from "../../../shared/models/cart";
import { RouterLink } from "@angular/router";
import { CurrencyPipe } from "@angular/common";
import { CartService } from "../../../core/services/cart.service";

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  item = input.required<CartItem>();
  cartService = inject(CartService);
  removeFromCart(quantity:number) {
    this.cartService.removeFromCart(this.item().productId, quantity);
  };
  addToCart() {
    this.cartService.addToCart(this.item());
  }
  
}
