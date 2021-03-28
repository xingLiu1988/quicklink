import { ClientMessage } from './../models/client-message.model';
import { catchError } from 'rxjs/operators';
import { QUICKLINK_URL } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PostNoId } from './../models/postNoId.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  
  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  // used to receive a post from component and send post to the backend
  public postJob(post: PostNoId): Observable<ClientMessage> {
    console.log(post);
    return this.http.post<ClientMessage>(`${QUICKLINK_URL}registerposts`, post, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('post failed'))
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
