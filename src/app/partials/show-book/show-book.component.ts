import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    var e = `{
      "Id":3,
      "Title" :  "Knjiga mrtvih duša",
      "ShortDesc" : "Nastvak svetskog bestselera 'Biblioteka mrtvih'. Otkrijte da li je najveca misterija covecanstva otkrivena!",
      "Desc" : "",
      "Price" : 899,
      "PictureUrl" :  "Knjiga mrtvih dusa.jpg"
  }`;
  var b = JSON.parse(e);
  console.log(b);
    this.book = b;
  }

 @Input() book: Book;
}
