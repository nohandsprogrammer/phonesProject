import { Component, Input } from '@angular/core';
import { Phone } from '../../interfaces/phones.interface';

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styles: [`
    mat-card {
      margin-top: 15px
    }
    
    img {
      width: 80%; 
    }
  `]
})
export class PhoneCardComponent {

  @Input() phone!:Phone 

}
