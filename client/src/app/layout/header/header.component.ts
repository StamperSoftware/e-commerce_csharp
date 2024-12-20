import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule, NgbDropdownModule, NgbCollapseModule, RouterLink, FaIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuCollapsed = true;
  protected readonly faShoppingCart = faShoppingCart;
}
