import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float:right; color: orange; padding-left:10px;}
    `]
})

export class LoginComponent {
    check:boolean = true;
    userName:string;
    password:string;

    constructor(private route: Router, private authService:AuthService) {

    }

    login(formValues) {
        // console.log(formValues);
        this.authService.loginUser(formValues.userName, formValues.password);
        this.route.navigate(['events'])
    }

    cancel() {
        this.route.navigate(['events']);
    }
}