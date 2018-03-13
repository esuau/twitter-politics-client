import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Output() userSignedIn = new EventEmitter();

  public password: string = '';

  public incorrectPassword: boolean = false;

  constructor( private _authService: AuthService, private _router: Router ) { }

  ngOnInit() { }

  /**
   * Checks the password and set to signed in.
   */
  public signIn(): void {
    this._authService.checkCredentials( this.password ).subscribe(
      (response: boolean) => {
        if (response) {
          this._router.navigate(['/feed']);
          this.userSignedIn.emit();
        } else {
          this.incorrectPassword = true;
        }
      },
      error => console.error(error)
    );
  }

}
