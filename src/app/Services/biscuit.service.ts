import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BiscuitService {
url = "http://localhost:5184/api/Biscuit";    
  constructor(private http:HttpClient) { }

  GetBiscuits()
  {
   return this.http.get(this.url);
  }
 

}
