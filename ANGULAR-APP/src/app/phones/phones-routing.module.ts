import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { PhoneDetailsComponent } from './pages/phone-details/phone-details.component';
import { PhonesListComponent } from './pages/phones-list/phones-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: AddComponent },
      { path: 'details/:id', component: PhoneDetailsComponent },
      { path: 'phone-list', component: PhonesListComponent },
      { path: '**', redirectTo: 'phone-list' }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PhonesRoutingModule { }
