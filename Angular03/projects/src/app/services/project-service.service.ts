import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, filter } from 'rxjs/Operators';
import { IProject } from '../interfaces/iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  private projectURL = 'assets/projects.json';

  constructor(private httpClient: HttpClient) { }

  getProjects():Observable<IProject[]> {
    return this.httpClient.get<IProject[]>(this.projectURL).pipe(
      tap(data=> console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    console.error(err.message);
    return throwError(err.message);
  }
}
