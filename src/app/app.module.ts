import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    KorpaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
