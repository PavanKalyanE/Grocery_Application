import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent implements OnInit {
  loginForm:any;
  constructor(private http: HttpClient, private router: Router,private formBuilder:FormBuilder) {
    this.LoginIDPwd();
   }


  LoginIDPwd():void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z.-]+\\.[com]{3}$')]],
      password:['',Validators.required]
    });
  }

  AdminLogin() {
    console.log(this.LoginIDPwd)

    this.http.post('http://localhost:5184/api/Registrations/Login', this.loginForm.value, { responseType: 'text' }).subscribe(users => {
      console.log(users)
      if (users == "Login Successfull") {
        this.router.navigate(['/Menu']);
        
      }
    },
    error=>{
      if(error){
        console.log(error);
        alert("Sorry unable to register");
      }
    }
    );
   
  }
 

  ngOnInit(): void {
    
  }
  get field() { return this.loginForm.controls; }
}