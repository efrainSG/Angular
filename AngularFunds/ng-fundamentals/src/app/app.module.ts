import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { EventsListComponent } from './events/events-list-component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { Error4040Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error4040Component
  ],
  providers: [EventService,
  ToastrService,
  EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
