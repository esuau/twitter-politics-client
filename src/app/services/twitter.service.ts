import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Tweet } from '../definitions/tweet.definition';

@Injectable()
export class TwitterService {

  constructor( private _http: Http ) { }

  /**
   * Gets all tweets.
   */
  public getTweets(): Observable<Array<Tweet>> {
    return this._http.get( 'https://twitter-politics-server-staging.azurewebsites.net/service/statuses/all' )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }

  /**
   * Gets morning tweets.
   */
  public getMorningTweets(): Observable<Array<Tweet>> {
    return this._http.get( 'https://twitter-politics-server-staging.azurewebsites.net/service/statuses/morning' )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }

  /**
   * Gets tweets by trend topic.
   *
   * @param {string} topic - the selected topic.
   */
  public getTweetsByTopic( topic: string ): Observable<Array<Tweet>> {
    return this._http.get( 'https://twitter-politics-server-staging.azurewebsites.net/service/statuses/topics/' + topic )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }

}
