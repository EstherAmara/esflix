import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes),
    ],

    declarations: [
        ProfileComponent,
        LoginComponent,
    ],

    providers: [
       { 
           provide: 'canDeactivateEvent',
            useValue: checkTrueOrNot
        }
    ]
})

export class UserModule { }
export function checkTrueOrNot (stuff:ProfileComponent) {
    if(stuff.check) {
        return window.confirm('You have not saved changes made to this event, are you sure you want to cancel?');
    } return true;
}
export function deactivateStuff (comp:LoginComponent) {
    if(comp.check) {
        return window.confirm('You have not saved changes made to this page, are you sure you want to leave??');
    } return true;
}