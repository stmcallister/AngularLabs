import { Component, OnInit, Input, 
        Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  @Input()
  voteCount: number;

  @Output()
  onVote = new EventEmitter<number>();

  constructor() { }

  onClick(voteCount) {
    this.voteCount++;
    this.onVote.emit(voteCount);
  }
}


