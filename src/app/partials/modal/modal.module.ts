import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';


@NgModule({
  imports: [CommonModule, RouterModule, BrowserModule,ReactiveFormsModule,FormsModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: []
})
export class ModalModule {}
