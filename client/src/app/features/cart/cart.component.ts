import { Component, inject } from '@angular/core';
import { CartService } from "../../core/services/cart.service";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "../../shared/order-summary/order-summary.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartItemComponent,
    OrderSummaryComponent,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);
}
