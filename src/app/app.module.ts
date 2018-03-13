import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from "./app.component";
import { FeedComponent } from "./components/feed/feed.component";
import { TweetComponent } from "./components/tweet/tweet.component";
import { AuthComponent } from './components/auth/auth.component';

import { AuthService } from "./services/auth.service";
import { TwitterService } from "./services/twitter.service";

@NgModule({
  declarations: [AppComponent, FeedComponent, TweetComponent, AuthComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  providers: [AuthService, TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
