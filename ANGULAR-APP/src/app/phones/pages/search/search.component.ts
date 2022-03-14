import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../../interfaces/phones.interface';
import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  
  search:string = '';
  phones:Phone[] = [];

  constructor(private phonesService:PhonesService, 
              private router:Router) { }

  ngOnInit(): void {
    this.search = '';
  }

  searching(){
    this.phonesService.getSearches(this.search)
      .subscribe( phones => this.phones = phones );
  }

  optionSelected(event:any){
    const id = event['option']['value']['id'];
    this.search = event['option']['value']['name'];
    this.router.navigate(['/details', id]);
  }

}
