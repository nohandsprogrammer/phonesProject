import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page404Component } from './shared/page404/page404.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./phones/phones.module').then( m => m.PhonesModule)
   },
  {
    path:'404',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
