import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    toasts: Toast[] = [];
    
    show (toast:Toast){
        this.toasts.push(toast);
    }
    
    remove(toast:Toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
    
    clear(){
        this.toasts.splice(0, this.toasts.length);
    }
}

export interface Toast {
    message: string
    header?: string
    type : 'success' | 'error'
    classname?: string
    delay?: number
}