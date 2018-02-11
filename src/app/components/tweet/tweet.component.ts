import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../../definitions/tweet.definition';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet = {
    author: 'Evan',
    content: 'Hello World !'
  };

  constructor() { }

  ngOnInit() {
  }

}
