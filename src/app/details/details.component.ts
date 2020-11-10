import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  @Output() isDone = new EventEmitter<boolean>();
    like = 0;
    dislike = 0;

    upVote(){
      this.like = this.like + 1;
    }

    downVote(){
      this.dislike = this.dislike + 1;
    }
  ngOnInit() {
  }

}
