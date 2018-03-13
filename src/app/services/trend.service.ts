import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Trend } from '../definitions/trend.definition';

@Injectable()
export class TrendService {

  constructor( private _http: Http ) { }

  /**
   * Gets last 10 trends from the server.
   */
  public getTrends(): Observable<Array<Trend>> {
    return this._http.get( 'https://twitter-politics-server-staging.azurewebsites.net/service/trends' )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "Server error"));
  }

}
