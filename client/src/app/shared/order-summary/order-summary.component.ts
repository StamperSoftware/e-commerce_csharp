import { Component, inject } from '@angular/core';
import { CartService } from "../../core/services/cart.service";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  totals = this.cartService.totals;
}
