import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  
  jokes: Joke[];

  constructor(private jokeService: JokeService, 
              private router: Router) { }

  ngOnInit() {
    this.jokes = this.jokeService.getJokes();
  }

  showJoke(joke) {
    this.router.navigate(['/jokes/' + joke.id]);
  }
}




