import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditModel } from './subredditResponse';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private http:HttpClient) {

   }
   getAllSubreddits():Observable<Array<SubredditModel>>{
     return this.http.get<Array<SubredditModel>>('http://localhost:8080/api/subreddit')
   }

  createSubreddit(SubredditModel: SubredditModel): Observable<SubredditModel> {
      return this.http.post<SubredditModel>('http://localhost:8080/api/subreddit',
        SubredditModel);
   }
}
