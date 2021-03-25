import { QUICKLINK_URL } from './../../environments/environment';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  // handle user login 
  public login(user: User): Observable<User>{
    return this.http.post<User>(`${QUICKLINK_URL}login`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('login', undefined))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log it to the console if something goes wrong

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

}
