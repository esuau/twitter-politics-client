import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../definitions/tweet.definition';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets: Array<Tweet> = [
    { author: 'Noel Diril', content: 'Hello World Motherfucker !' },
    { author: 'Evan Suau', content: 'Hello World Man !' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
