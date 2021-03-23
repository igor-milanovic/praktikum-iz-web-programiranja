import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestiraneRuteraComponent } from './testirane-rutera/testirane-rutera.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  { path: 'ruterTest', component: TestiraneRuteraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
