import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventDetailsComponent,
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './route';
import { Error404Component } from './errors/404.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  providers: [
    EventService, 
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateEvent',
      useValue: checkDirtyState
    }
  ],
  
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, are you sure you want to cancel?')
  } return true
  
}
