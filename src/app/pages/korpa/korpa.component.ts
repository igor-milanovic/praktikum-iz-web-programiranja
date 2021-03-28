import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Korpa } from 'src/app/models/Korpa';
import { KarticaInfo, modal } from 'src/app/models/modalClasses';
import { ModalResponse } from 'src/app/models/ModalResponse';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent implements OnInit {

  books:Book[];
  knjigeNaAkciji : Book[];

  modal:modal;
  sviItemi : Korpa[];
  ukupanIznos:number;
  kupiModal:boolean;
  potvrdiModal : boolean;
  selectedBook:Book;
  prikaziModal:boolean;
  constructor( private bookService :BooksService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
    this.knjigeNaAkciji=this.books.slice(0,3);

   this.dohvatiLocalStorage();
    this.izracunajUkupanIznos();
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

    this.dohvatiLocalStorage();
    this.izracunajUkupanIznos();
  }

  dohvatiLocalStorage(){
    let korpaString = localStorage.getItem('korpa');
    if(korpaString == null || korpaString.length<3){
      this.sviItemi=[];
    }else{
      this.sviItemi = JSON.parse(korpaString);
    }
    console.log(this.sviItemi);
  }

  izmeniLocalStorage(){
    localStorage.setItem('korpa', JSON.stringify(this.sviItemi));
  }
  izracunajUkupanIznos(){
    this.ukupanIznos = 0;
    this.sviItemi.forEach(e=>{
      this.ukupanIznos += (e.Knjiga.Price * e.Kolicina);
    });
  }


dodaj(k:Korpa){
  console.log(k);
  let tmp = this.sviItemi.find(e=>e.Knjiga.Id == k.Knjiga.Id);
  tmp.Kolicina++;
  this.izracunajUkupanIznos();
  this.izmeniLocalStorage();
}
obrisi(k:Korpa){
  let tmp = this.sviItemi.filter(e=>{
   return e.Knjiga.Id != k.Knjiga.Id;
  })
  this.sviItemi = tmp;
  this.izracunajUkupanIznos();
  this.izmeniLocalStorage();
  console.log(k);
}
smanji(k:Korpa){

  let tmp = this.sviItemi.find(e=>e.Knjiga.Id == k.Knjiga.Id);
  if(tmp.Kolicina == 1){
    this.obrisi(k)
  }else{
    tmp.Kolicina--;
  }
  this.izracunajUkupanIznos();
  this.izmeniLocalStorage();
}

kupi(){
  this.kupiModal = true;
  console.log("kupi");
}
test(){
  console.log('localstorage:', localStorage.getItem('korpa'));
  console.log('sviItemi:', this.sviItemi);
}


kupiModalEmited(el : KarticaInfo){
  console.log(el);
  if(el == null){
    this.kupiModal = false;
  }
  else{
    this.kupiModal = false;

    let tmp = new modal();

    tmp.title = "Potvrda";
    tmp.text = 'Da li ste sigurni da želite da kupite knjige u iznosu od ' + this.ukupanIznos+ ' dinara sa karticom čiji je vlasnik/ca ' + el.Ime + ' ' + el.Prezime + ' i broj: ' + el.BrojKartice +' ?';
    tmp.btnDaText="Potvrdi";
    tmp.btnNeText = "Odustani";
    tmp.neFja= function(){
      let resp = new ModalResponse();
      resp.type = 'Odustani';
      return resp
    }

    tmp.daFja = function(){
      alert("Uspešna kupovina");
      let resp = new ModalResponse();
      resp.type = 'Kupi';
      return resp
    }

    this.modal = tmp;

    this.potvrdiModal = true;
  }
}

potvrdiModalEmited(x){
  console.log(x);

  switch(x.type){
    case 'Odustani':
      this.potvrdiModal= false;
    break;
    case 'Kupi':
      this,this.isprazniKorpu();
      this.potvrdiModal= false;
    break;
   
  default:
    this.potvrdiModal= false;
  }
}

isprazniKorpu(){
  this.ukupanIznos = 0;
  this.sviItemi = [];
  localStorage.setItem('korpa','[]');
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

}
