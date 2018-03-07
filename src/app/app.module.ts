import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppRoutingModule } from './app.routing';

import { AppComponent } from "./app.component";
import { FeedComponent } from "./components/feed/feed.component";
import { TweetComponent } from "./components/tweet/tweet.component";
import { TwitterService } from "./services/twitter.service";
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AppComponent, FeedComponent, TweetComponent, AuthComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
