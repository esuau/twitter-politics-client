import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor( private _http: Http ) { }

  /**
   * Checks if the submitted password is correct.
   *
   * @param {string} password - the submitted password.
   * @return {Observable<boolean>} true if the credential is correct, false if not.
   */
  public checkCredentials( password: string ): Observable<boolean> {
    return this._http.post( 'https://twitter-politics-server-staging.azurewebsites.net/service/authentication', password )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "Server error")
    );
  }

}
