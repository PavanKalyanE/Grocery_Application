import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import { Validators,FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';




@Component({
  selector: 'app-shopres',
  templateUrl: './shopres.component.html',
  styleUrls: ['./shopres.component.css']
})
export class ShopresComponent implements OnInit {

  RForm : any;

  constructor (private http:HttpClient,private router:Router,private formBuilder:FormBuilder){
  }
  


  alert:boolean = false;
  
  save(){
    this.http.post('http://localhost:5184/api/Registrations/create', this.RForm,{ responseType: 'text' }).subscribe(data=>{
   
    console.log(data);
    // if(data=="Failed to Add data")
    // {
    //   alert(["Email ID already exists"]);
      
    // }
    this.alert = true;  

    }) ;   

  }
  CloseAlert()
  {
    this.alert = false;
  }
  ngOnInit(): void {
this.RForm = this.formBuilder.group({
sname : ['',Validators.required],
oname : ['',Validators.required],
mobile : ['',[Validators.required,Validators.pattern('[6-9]\\d{9}')]],
saddress : ['',Validators.required],
city : ['',Validators.required],
pincode : ['',[Validators.required,Validators.pattern('[0-9]\\d{5}')]],
email : ['',[Validators.email,Validators.required]],
password : ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],


});

  }
  get field() { return this.RForm.controls; }
  
}

