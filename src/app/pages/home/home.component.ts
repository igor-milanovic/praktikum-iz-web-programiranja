import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Korpa } from 'src/app/models/Korpa';
import { modal, ModalResponse } from 'src/app/models/ModalResponse';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:Book[];
  knjigeNaAkciji : Book[];
  selectedBook : Book;

  showPrintModal = false;
  prikaziModal = false;
  modal : modal;
  constructor(
    private bookService :BooksService,
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
    this.knjigeNaAkciji=this.books.slice(0,4);
  }
  test(){
    console.log("test");
    console.log(this.showPrintModal);
    console.log(this.selectedBook);
    localStorage.setItem('korpa','')
    console.log('storage',localStorage.getItem('korpa'))
  }


  bookModalEmited(x : ModalResponse){
    console.log(x);
  //  this.selectedBook = x;     
    switch(x.type){
      case 'zatvori':
        this.prikaziModal= false;
      break;
      case 'dodaj':
        this.dodajUKorpu(this.selectedBook);
        this.prikaziModal= false;
      break;
     
    default:
      console.log("defoltno");
      this.prikaziModal= false;
    }
     
    }

  


  showBookModal(x){
    console.log(x);
     this.selectedBook = x;     
     this.modal=new modal();
     this.modal.title=this.selectedBook.Title;
     this.modal.text=this.selectedBook.Description;
    //  this.modal.tbValue = '';
     this.modal.neFja=function(y){
        let resp = new ModalResponse();
        resp.type = 'zatvori';
        return resp
     }
 
     this.modal.daFja=function(){
       let resp = new ModalResponse();
       resp.type = 'dodaj';
       this.tbValue = '';
       return resp;
      
     }

     this.modal.btnDaText='Dodaj u korpu';
     this.modal.btnNeText = 'Zatvori';

     this.prikaziModal=true;
 
  }

  dodajUKorpu(book : Book){
    console.log('knjiga',book);
    
    let korpa:Korpa[];
    let korpaString = localStorage.getItem('korpa');
    if(korpaString == null || korpaString.length<3){
      korpa=[];
    }else{
      korpa = JSON.parse(korpaString);
    }
    let knjigaUKorpi = korpa.find(e=>e.Knjiga.Id == book.Id);

    if(knjigaUKorpi == null){
      knjigaUKorpi = new Korpa();
      knjigaUKorpi.Knjiga = book;
      knjigaUKorpi.Kolicina = 1;
      korpa.push(knjigaUKorpi);
    }else{
      knjigaUKorpi.Kolicina ++;
    }
    korpaString = JSON.stringify(korpa);
    localStorage.setItem('korpa', korpaString);
  }
}
