import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

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
  filteredProjects: Project[] = [];
  projects: Project[] = [];

  constructor(private service:ProjectsService) { }

  ngOnInit(): void {
    this.sub = this.service.getProjects().subscribe({
        next: p => {
            this.projects = p;
            this.filteredProjects = this.performFilter('');
            console.log('All', this.projects);
            console.log('Filtered', this.filteredProjects);
        },
        error: e => console.error(e)
    });
    console.log('All outside', this.filteredProjects);
   }

  performFilter(theFilter:string):Project[] {
    theFilter = theFilter.toLowerCase();
    return this.projects.filter((project:Project)=>
      project.Name.toLowerCase().includes(theFilter));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
