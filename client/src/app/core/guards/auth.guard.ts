import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AccountService } from "../services/account.service";
import { map, of } from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
    const accountService = inject(AccountService);
    const router = inject(Router);
    
    if (accountService.currentUser()) return of(true);
    
    return accountService.getAuthState().pipe(
        map(auth => {
            console.log(auth);
          if (auth.isAuthenticated) {
            return true;
          }
          router.navigate(['account/login'], {queryParams:{returnUrl:state.url}});
          return false;
        })
    );
};
