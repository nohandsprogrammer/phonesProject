import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../../interfaces/phones.interface';
import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
  img {
    width: 45%;
  }
  `]
})
export class AddComponent implements OnInit {
  
  
  phoneForm = this.fb.group({
    id: [''],
    url_hash: [''],
    brand_id: [''],
    name: ['', Validators.required], 
    picture: [''],
    released_at: ['', Validators.required],
    body: [''],
    os: [''],
    storage: [''],
    display_size: [''],
    display_resolution: [''],
    camera_pixels: [''],
    video_pixels: [''],
    ram: [''],
    chipset: [''],
    battery_size: [''],
    battery_type: [''],
    deleted_at: [''],
    created_at: [''],
    updated_at: ['']
  })

  phoneId:string;
  isEditing:boolean = false;
  editPhone:Phone;
  editPhoneForm:FormGroup;

  constructor(private phonesService:PhonesService,
              private fb: FormBuilder,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }
              
  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({id}) => this.phoneId = id);

      if(this.phoneId !== undefined){
        this.phonesService.getPhoneById(this.phoneId)
          .subscribe(phone =>{
            this.editPhone = phone[0];

            this.editPhoneForm = new FormGroup({
              id: new FormControl(this.editPhone.id),
              url_hash: new FormControl(this.editPhone.url_hash),
              brand_id: new FormControl(this.editPhone.brand_id),
              name: new FormControl(this.editPhone.name), 
              picture: new FormControl(this.editPhone.picture),
              released_at: new FormControl(this.editPhone.released_at),
              body: new FormControl(this.editPhone.body),
              os: new FormControl(this.editPhone.os),
              storage: new FormControl(this.editPhone.storage),
              display_size: new FormControl(this.editPhone.display_size),
              display_resolution: new FormControl(this.editPhone.display_resolution),
              camera_pixels: new FormControl(this.editPhone.camera_pixels),
              video_pixels: new FormControl(this.editPhone.video_pixels),
              ram: new FormControl(this.editPhone.ram),
              chipset: new FormControl(this.editPhone.chipset),
              battery_size: new FormControl(this.editPhone.battery_size),
              battery_type: new FormControl(this.editPhone.battery_type),
              deleted_at: new FormControl(this.editPhone.deleted_at),
              created_at: new FormControl(this.editPhone.created_at),
              updated_at: new FormControl(this.editPhone.updated_at)
            })

            this.isEditing = true;
          });
      }
  }

  submitForm(){
    this.phoneForm.value['id'] = Date.now().toString();
    this.phoneForm.value['created_at'] = this.getDate();
    this.phoneForm.value['updated_at'] = this.getDate();

    this.phonesService.addPhone(this.phoneForm.value)
      .subscribe( res => console.log(res));

    setTimeout(() => {
      this.router.navigate(['/phone-list'])}
      , 1500);
  }

  submitEditForm(){
    this.editPhoneForm.value['updated_at'] = this.getDate();

    this.phonesService.editPhone(this.editPhoneForm.value, this.editPhoneForm.value['id'])
      .subscribe( res => console.log(res));

    setTimeout(() => {
      this.router.navigate(['/phone-list'])}
      , 1500); 
  }

  deletePhone(){
    this.phonesService.deletePhone(this.editPhoneForm.value['id'])
      .subscribe( res => console.log(res));
      
    setTimeout(() => {
      this.router.navigate(['/phone-list'])}
      , 1500); 
    
  }

  getDate(){
    //Obtain from https://stackoverflow.com/questions/10632346/how-to-format-a-date-in-mm-dd-yyyy-hhmmss-format-in-javascript
    const d = new Date();
    
    const dString = `${
      (d.getMonth()+1).toString().padStart(2, '0')}/${
      d.getDate().toString().padStart(2, '0')}/${
      d.getFullYear().toString().padStart(4, '0')} ${
      d.getHours().toString().padStart(2, '0')}:${
      d.getMinutes().toString().padStart(2, '0')}:${
      d.getSeconds().toString().padStart(2, '0')}`

      return dString;
  }

  back(){
    this.router.navigate(['/phone-list']);
  }

}
