import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudentListComponent } from './Components/student-list/student-list.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentCreateComponent } from './Components/student-create/student-create.component';
import { StudentDeleteComponent } from './Components/student-delete/student-delete.component';


const routes: Routes = [
  { path:'', redirectTo:'students', pathMatch:'full' },
  { path:'students', component:StudentListComponent },
  { path:'students/ById/:id', component:StudentDetailsComponent },
  { path:'students/create', component:StudentCreateComponent },
  { path: 'students/del/:id', component:StudentDeleteComponent }

];

@NgModule({

  imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
