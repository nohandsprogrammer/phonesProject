import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '../interfaces/phones.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(phone: Phone): string {

    if(phone.picture == ""){
      phone.picture = "https://www.learningcomputer.com/blog/wp-content/uploads/2016/11/bigstock-Smart-Phone-With-Blue-Screen-I-29625884.jpg"
    }

    return phone.picture;
  }

}
