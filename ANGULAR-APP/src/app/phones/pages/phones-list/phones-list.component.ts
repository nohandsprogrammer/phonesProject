import { Component, OnInit } from '@angular/core';
import { Phone } from '../../interfaces/phones.interface';
import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styles: []
})
export class PhonesListComponent implements OnInit {

  phones:Phone[] = [];

  constructor(private phonesService:PhonesService) { }

  ngOnInit(): void {
    this.phonesService.getPhones()
      .subscribe(phones => this.phones = phones);
  }

}
