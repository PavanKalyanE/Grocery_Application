import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Shoplogin',
  templateUrl: './shoplogin.component.html',
  styleUrls: ['./shoplogin.component.css']
})
export class ShoploginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }


  LoginIDPwd = {
    Email: '',
    Password: ''
  }

  ShopLogin() {
    console.log(this.LoginIDPwd)

    this.http.post('http://localhost:5184/api/Registrations/Login', this.LoginIDPwd, { responseType: 'text' }).subscribe(users => {
      console.log(users)
      if (users == "Login Successfull") {
        this.router.navigate(['/Dashboard']);
        
      }
      
       
     
      
    });
   
  }

  ngOnInit(): void {
  }

}
