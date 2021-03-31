import { Post } from './../models/post.model';
import { ClientMessage } from '../models/client-message.model';
import { catchError } from 'rxjs/operators';
import { QUICKLINK_URL } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PostNoId } from '../models/postNoId.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  
  // used to post a job
  public postJob(post: PostNoId): Observable<ClientMessage> {
    
    return this.http.post<ClientMessage>(`${QUICKLINK_URL}registerPost`, post, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('cannot register the user!'))
    );
  }

  // handle error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  // get all jobs
  public getAllJobs(): Observable<Post[]>{
    return this.http.get<Post[]>(`${QUICKLINK_URL}allPosts`)
    .pipe(
      catchError(this.handleError<Post[]>('getAllJobs',[]))
    )
  }

  // delete post
  public delete(post: Post): Observable<any> {
    console.log(post);
    return this.http.post<any>(`${QUICKLINK_URL}delete`, post, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('cannot delete'))
    )
  }
}
