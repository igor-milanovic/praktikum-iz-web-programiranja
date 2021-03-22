import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestiraneRuteraComponent } from './testirane-rutera/testirane-rutera.component';

const routes: Routes = [
  { path: 'ruterTest', component: TestiraneRuteraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
