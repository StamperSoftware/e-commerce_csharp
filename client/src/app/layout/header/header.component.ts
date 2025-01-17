import { Component, inject } from '@angular/core';
import { NgbDropdownModule, NgbNavModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { LoadingService } from "../../core/services/loading.service";
import { CartService } from "../../core/services/cart.service";
import { AccountService } from "../../core/services/account.service";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule, NgbDropdownModule, NgbCollapseModule, RouterLink, FaIconComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuCollapsed = true;
  protected readonly faShoppingCart = faShoppingCart;
  loadingService = inject(LoadingService)
  cartService = inject(CartService)
  accountService = inject(AccountService)
  router = inject(Router);
  
  logout() {
    this.accountService.logout().subscribe({
      next:() => {
          this.accountService.currentUser.set(null);
          this.router.navigateByUrl('/');
        }
    })
  }
  
}
