import { Component, inject } from '@angular/core';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  accountService = inject(AccountService);
}
