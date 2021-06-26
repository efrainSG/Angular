import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectAPIURL: string = 'assets/projects.json';
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.projectAPIURL).pipe(
      tap(data=> console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return throwError(err.message);
  }
}
