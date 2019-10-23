import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1> Upcoming Angular Events </h1>
            <hr />
            <events-thumbnail (click)="handleThumbnailClick(event.name)" *ngFor="let event of events" [event] ="event" class="col-md-5"></events-thumbnail>
        </div>
    `,
})

export class EventsListComponent implements OnInit {
    events:IEvent[]

    constructor (private eventService: EventService, private route: ActivatedRoute) {
      // console.log(this.events);
    }

    ngOnInit() {
      this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
      
    }

}