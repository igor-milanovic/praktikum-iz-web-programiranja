import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-show-book-modal',
  templateUrl: './show-book-modal.component.html',
  styleUrls: ['./show-book-modal.component.css']
})
export class ShowBookModalComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

 @Input() book: Book;
}
