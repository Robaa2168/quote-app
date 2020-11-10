import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Nelson Joseph Weizenbaum', 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', 'robaa', new Date(2018, 5, 10)),
    new Quote(2, 'Edward V. Berard', 'Walking on water and developing software from a specification are easy if both are frozen.', 'Robaa', new Date(2020, 3, 23)),
  ]

showDescription= false;

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength - 3;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)

      if (toDelete) { this.quotes.splice(index, 1) }
    }
  }
  showDetails(index) {
    this.quotes[index].showProjectDetails = !this.quotes[index]
      .showProjectDetails;
  }



ngOnInit() {
}

}