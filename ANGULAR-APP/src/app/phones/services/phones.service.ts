import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Phone } from '../interfaces/phones.interface';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }
    
    getPhones(): Observable<Phone[]>{
      return this.http.get<Phone[]>(`${this.baseUrl}/phones`)
    }

    getPhoneById(id:string): Observable<Phone>{
      return this.http.get<Phone>(`${this.baseUrl}/phones/${id}`)
    }

    getSearches(search:string, limit:number = 100): Observable<Phone[]>{
      return this.http.get<Phone[]>(`${this.baseUrl}/phones/?q=${search}&limit=${limit}`)
    }

    addPhone(phone:Phone): Observable<Phone>{
      return this.http.post<Phone>(`${this.baseUrl}/phones`, phone)
    }

    editPhone(phone:Phone, id:string): Observable<Phone>{
      return this.http.put<Phone>(`${this.baseUrl}/phones/${id}`, phone)
    }

    deletePhone(id:string){
      return this.http.delete(`${this.baseUrl}/phones/${id}`)
    }
}
