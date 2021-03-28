import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { modal } from 'src/app/models/modalClasses';

@Component({
  selector: 'app-modal-complete',
  templateUrl: './modal-complete.component.html',
  styleUrls: ['./modal-complete.component.css']
})
export class ModalCompleteComponent implements OnInit {

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
