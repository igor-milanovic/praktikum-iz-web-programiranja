import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { modal, ModalResponse } from 'src/app/models/ModalResponse';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:Book[];
  selectedBook : Book;

  showPrintModal = false;
  prikaziModal = false;
  modal : modal;
  constructor(
    private bookService :BooksService
  ) { }

  ngOnInit(): void {
  //   this.bookService.getAllBooks().subscribe(
  //     (x:Book[])=>{
  //       console.log(x)
  //       console.log("success")
  //     },
  //     y=>{
  //       console.log("error:", y)
  //     }
  //   );
    this.books = this.bookService.getAllBooks();
  }
  test(){
    console.log("test");
    // this.showPrintModal = true;
    // this.prikaziModal = true
    console.log(this.showPrintModal);
    console.log(this.selectedBook);
  }


  modalEmited(x : ModalResponse){
    console.log(x);
  }
  bookEmited(x ){
    console.log(x);
     this.selectedBook = x;     
     this.modal=new modal();
     this.modal.title=this.selectedBook.Title;
     this.modal.text=this.selectedBook.Description;
    //  this.modal.tbValue = '';
     this.modal.neFja=function(y){
       console.log(y);
        this.tbValue = '';
        let resp = new ModalResponse();
        resp.type = '';
        return resp
     }
 
     this.modal.daFja=function(){
       //mozda validacija textboxa
       let resp = new ModalResponse();
       if(this.tbValue == ''){
        resp.type = 'prazno';
      }else{
       resp.type = 'dozivljenje';
       resp.value = this.tbValue;
      }
       this.tbValue = '';
       return resp;
      
     }

     this.modal.btnDaText='Dodaj u korpu';
     this.modal.btnNeText = 'Zatvori';

     this.prikaziModal=true;
 
  }

  modalZaDozivljenje(e){
    if (e) {
      e.preventDefault();
    }     
     this.modal=new modal();
     this.modal.title='Korisnik osiguranja u slučaju doživljenja';
     this.modal.text='Unesite prezime, ime i datum rođenja: (Perić Petar 15.09.1972. god.)';
    this.modal.tbValue = '';
     this.modal.neFja=function(y){
        this.tbValue = '';
        let resp = new ModalResponse();
        resp.type = '';
        return resp
     }
 
     this.modal.daFja=function(){
       //mozda validacija textboxa
       let resp = new ModalResponse();
       if(this.tbValue == ''){
        resp.type = 'prazno';
      }else{
       resp.type = 'dozivljenje';
       resp.value = this.tbValue;
      }
       this.tbValue = '';
       return resp;
      
     }

     this.modal.btnDaText='Dodaj';
     this.modal.btnNeText = 'Odustani';

     this.prikaziModal=true;
 
  }
}
