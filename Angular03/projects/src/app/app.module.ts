import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './compos/project-list/project-list.component';
import { ProjectDetailComponent } from './compos/project-detail/project-detail.component';
import { ProjectCreateComponent } from './compos/project-create/project-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'projects', component: ProjectListComponent },
      { path: 'projects/details', component: ProjectDetailComponent },
      { path: 'projects/create', component: ProjectCreateComponent },
      { path: '', redirectTo: 'projects' },
      { path: '**', redirectTo: 'projects' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
