import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KarticaInfo, modal } from 'src/app/models/modalClasses';

@Component({
  selector: 'app-kupi-modal',
  templateUrl: './kupi-modal.component.html',
  styleUrls: ['./kupi-modal.component.css']
})
export class KupiModalComponent implements OnInit {

  @Output() emiter = new EventEmitter<any>();
  @Input() modal: modal;
  showModal: boolean;

  fg = new FormGroup({ 
    ime: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    prezime: new FormControl(null, [Validators.required, Validators.minLength(4),  Validators.maxLength(20)]), 
    kartica: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(16),Validators.maxLength(16)]), 
  });
  constructor() { }

  ngOnInit(): void {
    this.showModal = true;
  }

  ne(){
    this.emiter.emit(null);
  }

  da(){

    let tmp = new KarticaInfo();
    console.log(this.fg);
    tmp.Ime = this.fg.value.ime;
    tmp.Prezime = this.fg.value.prezime;
    tmp.BrojKartice = this.fg.value.kartica;
    console.log(tmp)
    // tmp.Ime = this.fg.ge
    this.emiter.emit(tmp);
  }
}
