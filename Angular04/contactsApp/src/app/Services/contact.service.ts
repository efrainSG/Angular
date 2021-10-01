import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, filter } from 'rxjs/operators';
import { IContact } from '../Models/icontact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactURL: string = 'https://localhost:44363/Contacts'; // replace with API server
  private contact: IContact = {
    id: 0,
    address: '',
    favorite: true,
    name: '',
    phone: ''
  };

  constructor(private http: HttpClient) { }

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.contactURL}/list`)
    .pipe(
      //tap(data=>console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getContact(id:number): Observable<IContact> {
    return this.http.get<IContact>(`${this.contactURL}/detail/${id}`);
  }

  postContact(contact: IContact): Observable<any> {
    console.log(contact);
    return this.http.post(`${this.contactURL}/add`, contact);
  }

  delContact(id: number): Observable<any> {
    return this.http.delete(`${this.contactURL}/quit/${id}`);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return throwError(err.message);
  }
}