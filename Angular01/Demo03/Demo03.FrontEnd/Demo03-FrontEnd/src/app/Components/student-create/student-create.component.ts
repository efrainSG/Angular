import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student-service.service';
import { Student } from '../../Classes/student';

@Component ({
  selector:'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls:[
    './student-create.component.css'
  ]
})
export class StudentCreateComponent implements OnInit {
  student : Student = {
    id: 0,
    grade : '',
    idGrade: 1,
    modified: undefined,
    name: ''
  };
  
  submited: boolean = false;
  
  constructor (private studentService:StudentService){ }

  ngOnInit(){
    
  }

  createStudent():void {
    const data = {
      id: 0,
      name: this.student.name,
      idGrade:this.student.idGrade,
      modified:this.student.modified
    };

    this.studentService.create(data)
    .subscribe(
      student=>{
        this.submited = true;
        console.log(student);
      },
      error => {
        console.error(error);
      }
    );
  }

  newStudent(): void {
    this.submited = false;
    this.student = {
      id: 0,
      grade:'',
      name: '',
      idGrade: 1,
      modified: undefined
    };
  }
}