import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../Classes/student';
import { from } from 'rxjs';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  currentStudent: Student | undefined;
  deleted: boolean = false;

  constructor(private studentService:StudentService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getStudent(this.route.snapshot.paramMap.get('id'))
  }

  getStudent(id: any): void {
    this.studentService.read(id)
    .subscribe(
      student=>{
        console.log(student);
        this.currentStudent = student;
      },
      error => {
        console.error(error);
      }
    );
  }

  delete(): void {
    this.studentService.delete(this.currentStudent)
    .subscribe(
      s => {
        console.log(s);
        this.deleted = s;
      },
      error => {
        console.error(error);
      }
    );
  }
}
