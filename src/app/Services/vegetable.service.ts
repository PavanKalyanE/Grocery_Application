import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VegetableService {
url ='http://localhost:5184/api/Vegetables';
  constructor(private http:HttpClient) { }

  Getvegetables()
  {
    return this.http.get(this.url);
  }
}
