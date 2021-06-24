import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';


@Component({
    selector: 'prj-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Projects list';



    errorMessage: string = '';
    sub !: Subscription;

    private filterStr:string = '';
    get projectsFilterString(): string {
        return this.filterStr;
    }
    set projectsFilterString(value:string) {
        this.filterStr = value;
        this.filteredProjects = this.performFilter(value);
    }
  projects: Project[] = [
    {
        "ProjectId":1000,
        "Name":"project 1000",
        "TypeId":1,
        "LastModified":"01-06-2021",
        "Ranking": 4
    },
    {
        "ProjectId":2000,
        "Name":"project 2000",
        "TypeId":1,
        "LastModified":"01-06-2021",
        "Ranking": 4
    },
    {
        "ProjectId":3000,
        "Name":"project 3000",
        "TypeId":1,
        "LastModified":"01-06-2021",
        "Ranking": 4
    },
    {
        "ProjectId":4000,
        "Name":"project 4000",
        "TypeId":1,
        "LastModified":"01-06-2021",
        "Ranking": 4
    },
    {
        "ProjectId":5000,
        "Name":"project 5000",
        "TypeId":1,
        "LastModified":"01-06-2021",
        "Ranking": 4
    },
    {
        "ProjectId":6000,
        "Name":"project 6000",
        "TypeId":1,
        "LastModified":"01-06-2021",
        "Ranking": 3
    }
  ];
  filteredProjects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredProjects = this.projects;
  }

  performFilter(theFilter:string):Project[] {
    theFilter = theFilter.toLowerCase();
    return this.projects.filter((project:Project)=>
      project.Name.includes(theFilter));
  }

  ngOnDestroy(): void {

  }

}
