import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  fg = new FormGroup({ 
    ime: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    adresa: new FormControl(null, [Validators.required, Validators.minLength(5)]), 
    email: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
    poruka: new FormControl(null, [Validators.required, Validators.minLength(50)]), 
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  posalji(){
    alert("Porudžbina poslata!")
    this.fg.reset();
  }
}

