import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {
  url = "http://localhost:5184/api/Fruits"
  constructor(private http: HttpClient) { }

  GetFruits() {
    return this.http.get(this.url);
  }
}
