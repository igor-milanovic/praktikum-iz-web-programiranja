import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TestiraneRuteraComponent } from './testirane-rutera/testirane-rutera.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowBookComponent } from './partials/show-book/show-book.component';
import { KnjigeComponent } from './pages/knjige/knjige.component';
import { AutorComponent } from './pages/autor/autor.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { KorpaComponent } from './pages/korpa/korpa.component';
import { ShowBookModalComponent } from './partials/show-book-modal/show-book-modal.component';
import { ModalCompleteComponent } from './partials/modal-complete/modal-complete.component';


@NgModule({
  declarations: [
    AppComponent,
    TestiraneRuteraComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShowBookComponent,
    KnjigeComponent,
    AutorComponent,
    KontaktComponent,
    KorpaComponent,
    ShowBookModalComponent,
    ModalCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
