import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { NavigationExtras, Router } from "@angular/router";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { ToastService } from "../services/toast.service";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
    const router = inject(Router);
    const toastService = inject(ToastService);
  
    return next(req).pipe(
        catchError((err:HttpErrorResponse) => {
            switch(err.status) {
                case 400:
                    if (err.error.errors) {
                        const modelStateErrors = [];
                        for (const key in err.error.errors) {
                            modelStateErrors.push(err.error.errors[key]);
                            toastService.show({message:err.error.errors[key] ?? err.error, type:'error'});
                        }
                        throw modelStateErrors.flat();
                    } else {
                        toastService.show({message:err.error.title??err.error, type:'error'});
                    }
                    break;
                case 401:
                    toastService.show({message:err.error.title??err.error, type:'error'})
                    break;
                case 404:
                    router.navigateByUrl('/not-found');
                    break;
                case 500:    
                    const navigationExtras :NavigationExtras = {state:{error:err.error}}
                    router.navigateByUrl('/server-error', navigationExtras);
                    break;
            }
            return throwError(()=>err);
        })
    );
};
