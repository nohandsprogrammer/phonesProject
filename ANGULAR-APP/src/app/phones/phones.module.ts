import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { PhonesRoutingModule } from './phones-routing.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { PhoneDetailsComponent } from './pages/phone-details/phone-details.component';
import { HomeComponent } from './pages/home/home.component';
import { PhonesListComponent } from './pages/phones-list/phones-list.component';
import { PhoneCardComponent } from './components/phone-card/phone-card.component';
import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    PhoneDetailsComponent,
    HomeComponent,
    PhonesListComponent,
    PhoneCardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PhonesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PhonesModule { }
