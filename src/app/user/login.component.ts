import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
})

export class LoginComponent {
    check:boolean = true;
    userName:string;
    password:string;

    login(formValues) {
        console.log(formValues);
    }

    constructor(private route: Router) {

    }
    cancel() {
        this.route.navigate(['../events']);
    }
}