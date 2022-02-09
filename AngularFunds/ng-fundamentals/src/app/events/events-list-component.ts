import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
// import { ToastrService } from 'toastr';
import { ToastrService } from "../common/toastr.service";
// declare let toastr;

@Component({
    // selector: 'events-list',
    // templateUrl: 'events-list-component.html'
    template: `<div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
`
})

export class EventsListComponent {
  events?: any[];
    constructor(private eventService:EventService, private toastr: ToastrService) {
      
    }
    ngOnInit() {
      this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName:string) {
      this.toastr.success(eventName, eventName);
    }
}