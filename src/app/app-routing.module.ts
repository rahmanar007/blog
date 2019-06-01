import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerEntryComponent} from './customer-entry/customer-entry.component';

const routes: Routes = [
  { path: 'user', component: CustomerEntryComponent },

  { path: '',
  redirectTo: '/user',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
