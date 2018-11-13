export class Joke {
    id: number;
    setup: string;
    punchline: string;
    lols: number = 0;
    groans: number = 0;

    constructor(id: number, setup: string, punchline: string) {
        this.id = id;
        this.setup = setup;
        this.punchline = punchline;
      }
    
    upVote() {
        this.lols++;
    }
    downVote() {
        this.groans++;
    }
}