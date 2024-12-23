import { Component } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: 'app-server-error',
    standalone: true,
    imports: [],
    templateUrl: './server-error.component.html',
    styleUrl: './server-error.component.scss'
})
export class ServerErrorComponent {
    error?: HttpErrorResponse;
    constructor (private router:Router) {
        const navigation = this.router.getCurrentNavigation();
        this.error = navigation?.extras?.state?.['error'];
    }
}
