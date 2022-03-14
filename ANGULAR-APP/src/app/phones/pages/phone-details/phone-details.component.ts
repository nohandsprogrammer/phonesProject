import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Phone } from '../../interfaces/phones.interface';
import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styles: [`
    img {
      width: 45%;
    }
  `]
})
export class PhoneDetailsComponent implements OnInit {

  phone!:Phone;

  constructor(private activatedRoute: ActivatedRoute,
              private phonesService: PhonesService,
              private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(switchMap(({id}) => this.phonesService.getPhoneById(id)))
      .subscribe(phone => this.phone = phone[0]);

      
    }

    back(){
      this.router.navigate(['/phone-list']);
    }

}
