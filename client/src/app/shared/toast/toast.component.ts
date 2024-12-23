import { Component, inject } from '@angular/core';
import { Input } from '@angular/core';
import { NgbToast } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "../../core/services/toast.service";

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [
        NgbToast
    ],
    templateUrl: './toast.component.html',
    styleUrl: './toast.component.scss',
    host:{class:'toast-container position-fixed top-0 end-0 p-3', style:`z-index:1200`}
})
export class ToastComponent {
    toastService= inject(ToastService);
    @Input() message = "";
    @Input() type:ToastType = "success"
}

type ToastType = "success" | "error";