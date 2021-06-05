import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:any;
  student = null;
  index:number = 0;
  name :string= '';

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.readStudents();
  }

  readStudents():void {
    this.studentService.readAll()
    .subscribe(
      s=>{
        this.students = s.items;
        console.log(s.items);
      },error=>{
        console.error(error);
      }
    );
  }

  searchStudents():void {
    this.studentService.searchByName(this.name)
    .subscribe(
      s=>{
        this.students = s.items;
        console.log(s);
      },
      error=>{
        console.error(error);
      }
    );
  }
}
