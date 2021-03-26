import { ClientMessage } from './../models/client-message.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from './../models/user.model';
import { QUICKLINK_URL } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    // Shout out to Farid for figuring out that Content-Type must have a "-" if used
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  public registerUser(user: User): Observable<ClientMessage> {
    return this.http.post<ClientMessage>(`${QUICKLINK_URL}register`, user, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('cannot register the user!'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
