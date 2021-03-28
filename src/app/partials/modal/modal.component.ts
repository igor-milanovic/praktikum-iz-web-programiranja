import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { modal } from '../../models/modalClasses';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {


  @Output() emiter = new EventEmitter<any>();
  @Input() modal: modal;
  showModal: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showModal = true;
  }

  ne(){
   // console.log(this.modal);
    let tmp = this.modal.neFja();
    this.emiter.emit(tmp);
  }

  da(){
  //  console.log(this.modal);
    let tmp = this.modal.daFja();
    this.emiter.emit(tmp);
  }
}
