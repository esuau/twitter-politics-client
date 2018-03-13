import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../definitions/tweet.definition';
import { TwitterService } from '../../services/twitter.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets: Array<Tweet> = [];

  constructor( private _service: TwitterService ) {
    this.loadTweets();
  }

  ngOnInit() {
  }

  public loadTweets(): void {
    this._service.getTweets().subscribe(
      (data: Array<Tweet>) => this.tweets = data,
      error => console.error(error)
    );
  }

  public loadMorningTweets(): void {
    this._service.getMorningTweets().subscribe(
      (data: Array<Tweet>) => this.tweets = data,
      error => console.error(error)
    );
  }

}
