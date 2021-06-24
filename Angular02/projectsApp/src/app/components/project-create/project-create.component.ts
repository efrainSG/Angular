import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'prj-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  pageTitle:string = 'Create new project';
  _project!: Project;
  get NewProject():Project{
    return this._project;
  }
  set NewProject(value: Project) {
    this._project = value;
  }

  constructor() { }

  ngOnInit(): void {
    this._project = this.new();
  }

  new():Project {
    return {
      ProjectId: 0,
      "Name": "",
      TypeId: 0,
      Ranking: 0,
      LastModified: ""
    };
  }
  save():void {
    console.log(this._project);
    this._project = this.new();

  }
}
