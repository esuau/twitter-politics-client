import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private signedIn: boolean = false;

  constructor( private _router: Router ) {
    if ( this.signedIn ) {
      this._router.navigate(['/feed']);
    } else {
      this._router.navigate(['/auth']);
    }
  }

  signIn() {
    this.signedIn = true;
    this._router.navigate(['/feed']);
  }

  logOut() {
    this.signedIn = false;
    this._router.navigate(['/auth']);
  }

}
