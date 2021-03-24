import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:Book[];

  constructor(
    private bookService :BooksService
  ) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (x:Book[])=>{
        console.log(x)
        console.log("success")
      },
      y=>{
        console.log("error:", y)
      }
    );
  }

}
