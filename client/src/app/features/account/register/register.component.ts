import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { AccountService } from "../../../core/services/account.service";
import { Router } from "@angular/router";
import { ToastService } from "../../../core/services/toast.service";
import { FloatingInputComponent } from "../../../shared/floating-input/floating-input.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FloatingInputComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);
  private router = inject(Router);
  private toast = inject(ToastService);
  validationErrors?: string[];
  registerForm = this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  })
  
  onSubmit(){
    
    if (this.registerForm.invalid) {
      document.getElementById('form-register')?.classList.add('was-validated');
      return;
    }
    
    this.accountService.register(this.registerForm.value).subscribe({
      next: () => {
        this.toast.show({message:"Registration successful", type:"success"});      
        this.router.navigateByUrl('/account/login');
      },
      error: (errors)=>this.validationErrors = errors,
    })
  }
}
