import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../Classes/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  currentStudent:Student | undefined;
  editing = false;
  message:string = '';

  constructor(private studentService:StudentService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getStudent(this.route.snapshot.paramMap.get('id'));
  }

  getStudent(id:any): void{
    this.studentService.read(id)
    .subscribe(
      student=>{
        this.currentStudent = student;
        console.log(this.currentStudent);
      },
      error=>{
        console.error(error);
      }
    );
  }

  setEdit(): void {
    this.editing = true;
  }

  save(): void {
    this.studentService.update(this.currentStudent)
    .subscribe(
      student=>{
        this.editing = false;
        console.log(student);
        this.getStudent(student.id);
      },
      error=>{
        console.error(error);
      }
    )
  }
}
