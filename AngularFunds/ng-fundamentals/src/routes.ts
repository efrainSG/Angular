
import { Routes } from "@angular/router";
import { Error4040Component } from "./app/errors/404.component";
import { CreateEventComponent } from "./app/events/create-event.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { EventRouteActivator } from "./app/events/event-details/event-route-activator.service";
import { EventsListComponent } from "./app/events/events-list-component";

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent },
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator] },
    {path: '404', component: Error4040Component},
    {path: '', redirectTo: '/events', pathMatch: 'full' }
]