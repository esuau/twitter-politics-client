import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { FeedComponent } from "./components/feed/feed.component";
import { TweetComponent } from "./components/tweet/tweet.component";
import { TwitterService } from "./services/twitter.service";

@NgModule({
  declarations: [AppComponent, FeedComponent, TweetComponent],
  imports: [
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
