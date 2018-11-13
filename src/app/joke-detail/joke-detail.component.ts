import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JokeService } from '../joke.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {
  joke: Joke;

  constructor(private jokeService: JokeService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const jokeId: number = this.activatedRoute.snapshot.params['jokeId'];
    this.joke = this.jokeService.getJoke(jokeId);
  }

  upVote() {
    this.joke.upVote();
  }

  downVote() {
    this.joke.downVote();
  }
}


