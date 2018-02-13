import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Tweet } from '../definitions/tweet.definition';

@Injectable()
export class TwitterService {
  constructor(private _http: Http) {}

  public getTweets(): Observable<Array<Tweet>> {
    return this._http.get( 'https://twitter-politics.azurewebsites.net/api/tweets' )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "Server error")
    );
  }
}
