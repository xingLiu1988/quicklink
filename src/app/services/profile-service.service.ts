import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { QUICKLINK_URL } from './../../environments/environment';
import { Observable, of } from 'rxjs';
import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';
import { ClientMessage } from '../models/client-message.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  public updateEmployee(emp: Employee): Observable<ClientMessage> {
    return this.http.post<ClientMessage>(`${QUICKLINK_URL}updateUserInfo`, emp, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateEmployee', undefined))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log it to the console if something goes wrong

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
