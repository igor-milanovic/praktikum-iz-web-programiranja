import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponces } from 'src/assets/api-responces';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private getBooksUrl = `api/books/getAllBooks`

  constructor(private http: HttpClient) { }

  public getAllBooks() {
    // return this.http.get(this.getBooksUrl);

    let x = new ApiResponces();

    return JSON.parse(x.Books);

  }
}

