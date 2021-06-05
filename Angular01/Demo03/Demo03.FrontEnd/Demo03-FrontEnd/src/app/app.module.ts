import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentCreateComponent } from './Components/student-create/student-create.component';
import { StudentSearchComponent } from './Components/student-search/student-search.component';



import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentDeleteComponent } from './Components/student-delete/student-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentCreateComponent,
    StudentSearchComponent,
    StudentDeleteComponent



  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
    ]),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
