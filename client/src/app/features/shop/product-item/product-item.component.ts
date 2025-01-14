import { Component, inject, Input } from '@angular/core';
import { Product } from "../../../shared/models/products";
import { CurrencyPipe, NgOptimizedImage } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from "@angular/router";
import { CartService } from "../../../core/services/cart.service";

@Component({
  selector: 'app-product-item',
  standalone: true,
    imports: [
        CurrencyPipe,
        FontAwesomeModule,
        RouterLink,
        NgOptimizedImage
    ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
    @Input() product?:Product;
    protected readonly faCartPlus = faCartPlus;
    cartService = inject(CartService);
    
    handleClick() {
        console.log('test');
    }
    
    
}
