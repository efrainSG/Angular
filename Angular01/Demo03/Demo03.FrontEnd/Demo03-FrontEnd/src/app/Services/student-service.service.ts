import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl:string = 'https://localhost:44311/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private httpClient:HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  read(id:number): Observable<any> {
    return this.httpClient.get(`${baseUrl}/ById/${id}`);
  }

  searchByName(name:string): Observable<any> {
    return this.httpClient.get(`${baseUrl}/ByName/${name}`)
  }

  create(data:any): Observable<any> {
    data.idGrade = Number(data.idGrade);
    const myHeaders = new HttpHeaders();
    myHeaders.append('Content-Type', 'application/json');
    return this.httpClient.post(baseUrl, data, {headers: myHeaders});
  }

  update(data:any): Observable<any> {
    return this.httpClient.put(baseUrl, data);
  }

  delete(data:any): Observable<any> {
    console.log(data);
    return this.httpClient.delete(`${baseUrl}/Del/${data.id}`);
  }
}
