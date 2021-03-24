import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorComponent } from './pages/autor/autor.component';
import { HomeComponent } from './pages/home/home.component';
import { KnjigeComponent } from './pages/knjige/knjige.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { KorpaComponent } from './pages/korpa/korpa.component';
import { TestiraneRuteraComponent } from './testirane-rutera/testirane-rutera.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'knjige', component:KnjigeComponent},
  {path : 'autor', component:AutorComponent},
  {path : 'kontakt', component:KontaktComponent},
  {path : 'korpa', component:KorpaComponent},
  { path: 'ruterTest', component: TestiraneRuteraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
