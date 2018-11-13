import { Injectable } from '@angular/core';
import { Joke } from './joke';

@Injectable()
export class JokeService {

  private database: Joke[] = [
    new Joke(1, "Why did Darth Vader cross the road?", "To get to the dark side."),
    new Joke(2, "What did the rug say to the floor?",  "Don\'t move! I\'ve got you covered!"),
    new Joke(3, "How do you get a tissue to dance?",  "You put a little boogie in it!"),
    new Joke(4, "How much does a polar bear weigh?",  "Enough to break the ice!"),
    new Joke(5, "I own the world's worst thesaurus!", "Not only is it awful, it's awful."),
    new Joke(6, "Velcro.", "Such a ripoff.")
  ];
  constructor() { }

  public getJokes(): Array<Joke> {
    return this.database;
  }

  public getJoke(jokeId: number): Joke {
    let myJoke: Joke;
    myJoke = this.database.find((joke) => {
      return joke.id == jokeId;
    });
    return myJoke;
  }
}




