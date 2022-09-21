import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { visitAll } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  [x: string]: any;
  readonly APIUrl = "http://localhost:5184/api";

  constructor(private http: HttpClient) { }
  getLoginList(): Observable<any[]> {
    return this.http.get<any>('http://localhost:5184/api/Admin/Get_Users');
  }
  addLoginList(val: any) {
    return this.http.post<any>('http://localhost:5184/api/User/User_Login', val);
  }

  addRegistrationList(val: any) {
    return this.http.post<any>("http://localhost:5184/api/User/User_Registration", val);
  }                            
  getRegistrationData() {
    return this.http.get("http://localhost:5184/api/Registrations");
  }
  addPaymentList(val: any) {
    return this.http.post<any>("http://localhost:5184/api/Payments", val);
  }
  // public 
  DeleteUser(id: number) {
    return this.http.delete("http://localhost:5184/api/Registrations/Delete?id=" + id);
  }
  UpdateUser(val:any)
  {
    return this.http.put<any>("http://localhost:5184/api/Registrations/Update",val);
  }

  getMenuList()
  {
    return this.http.get("http://localhost:5184/api/Menu_Card");
  }

  DeleteMenu(id:number)
  {
return this.http.delete("http://localhost:5184/api/Menu_Card/Delete?id=" + id);
  }
  UpdateMenu(val:any)
  {
    return this.http.put<any>("http://localhost:5184/api/Menu_Card/Update" ,val);
  }
}