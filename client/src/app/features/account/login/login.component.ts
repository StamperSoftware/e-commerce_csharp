import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { AccountService } from "../../../core/services/account.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] ?? '/';
  
  constructor() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] ?? '/';
  }
  
  loginForm = this.fb.group({
    email:[''],
    password:[''],
  })

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe({
      next:()=>{
        this.accountService.getUserInfo().subscribe();
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }
  
}
