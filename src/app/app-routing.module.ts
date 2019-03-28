import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homepage } from './components/pages/home/HomePage.component';

const routes: Routes = [
  {
    path:'',
    component:Homepage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
