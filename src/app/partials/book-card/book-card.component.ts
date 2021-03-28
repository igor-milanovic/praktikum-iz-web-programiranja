import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
 @Output() emiter = new EventEmitter<any>();
 @Input() book: Book;

 prikaziModal(b : Book){
  this.emiter.emit(b);
 }
}
