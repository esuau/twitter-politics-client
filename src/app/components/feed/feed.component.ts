import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../definitions/tweet.definition';
import { TwitterService } from '../../services/twitter.service';
import { Trend } from '../../definitions/trend.definition';
import { TrendService } from '../../services/trend.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets: Array<Tweet> = [];

  trends: Array<Trend> = [];

  showSpinner: boolean = false;

  constructor( private _service: TwitterService, private _trendService: TrendService ) {
    this.loadTweets();
    this.loadTrends();
  }

  ngOnInit() {
  }

  public loadTweets(): void {
    this.tweets = [];
    this._service.getTweets().subscribe(
      (data: Array<Tweet>) => this.tweets = data,
      error => console.error(error),
      () => this.showSpinner = false
    );
    this.showSpinner = true;
  }

  public loadMorningTweets(): void {
    this.tweets = [];
    this._service.getMorningTweets().subscribe(
      (data: Array<Tweet>) => this.tweets = data,
      error => console.error(error),
      () => this.showSpinner = false
    );
    this.showSpinner = true;
  }

  public loadTrends(): void {
    this.trends = [];
    this._trendService.getTrends().subscribe(
      (data: Array<Trend>) => this.trends = data,
      error => console.error(error)
    )
  }

  public filterTrends( trend: Trend ): void {
    this.tweets = this.tweets.filter( (tweet: Tweet) => tweet.text.indexOf(trend.name) >= 0 );
  }

}
