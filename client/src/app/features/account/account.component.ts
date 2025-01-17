import { Component, inject } from '@angular/core';
import { AccountService } from "../../core/services/account.service";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  accountService = inject(AccountService);
}
