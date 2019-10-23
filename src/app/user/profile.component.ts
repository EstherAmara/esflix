import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h1> Edit your Profile </h1>
        <hr>
        <div class="col-md-6">
            <h3> [Edit profile form] </h3>
            <br />
            <br />
            <button type="submit" class="btn btn-primary"> Save </button>
            <button type="button" class="btn btn-default" (click)="cancel()"> Cancel </button>
        </div>
    `,
})

export class ProfileComponent {
    check:boolean = true;
    constructor(private route: Router) {

    }
    cancel() {
        this.route.navigate(['../events']);
    }
    
}