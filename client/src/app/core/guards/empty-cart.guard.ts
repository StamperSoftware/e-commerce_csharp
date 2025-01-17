import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { CartService } from "../services/cart.service";
import { ToastService } from "../services/toast.service";

export const emptyCartGuard: CanActivateFn = (route, state) => {
  
  const cartService = inject(CartService);
  const toastService = inject(ToastService);
  const router = inject(Router); 
  
  if (cartService.cart()?.items?.length){
    return true;
  } else {
    toastService.show({message:'Cart must have at least one item to checkout', type:'error'});
    router.navigateByUrl("/shop");
    return false;
  }
};
