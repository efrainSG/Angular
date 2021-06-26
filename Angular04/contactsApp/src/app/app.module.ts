import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactCreateComponent } from './Components/contact-create/contact-create.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { ContactDetailComponent } from './Components/contact-detail/contact-detail.component';
import { FormsModule } from '@angular/forms';
import { ContactGuard } from './Components/Guards/contact.guard';

@NgModule({
  declarations: [
    AppComponent,
    ContactCreateComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'welcome', redirectTo: '', pathMatch: 'full' },
      { path: 'list', component: ContactListComponent },
      { path: 'create', component: ContactCreateComponent },
      { path: 'detail/:id',
        component: ContactDetailComponent,
        canActivate: [ContactGuard] }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
