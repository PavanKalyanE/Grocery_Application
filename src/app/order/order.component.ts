import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  registrationForm:any
  constructor (private http:HttpClient,private router:Router,private formBuilder:FormBuilder){
    this.createRegistrationForm();
    
  }
  
    createRegistrationForm(): void{
    this.registrationForm = this.formBuilder.group({
      name: ['',Validators.required],
      itemName: ['',Validators.required],
      quantity:['',Validators.required],
      price:['',Validators.required],
      address:['',Validators.required],
      timeslot:['',Validators.required],
     
    });
  }

  save(){
    this.http.post('http://localhost:5184/api/User/Post_Order',this.registrationForm.value,{ responseType: 'text' }).subscribe(data=>{
    console.log(data);
    if(data=="Order Confirmed")
    {
      this.router.navigate(['/Payment']);
    }
    localStorage.setItem('orderPlaces',JSON.stringify(data));
  },
    error=>{
      if(error){
        console.log(error);
        alert("Sorry unable to register");
      }
    }
    ) ;
    

  }

  ngOnInit(): void {
  }
  // get field() { return this.registrationForm.controls; }
  handleClear():void{
    this.registrationForm.reset();
  }

}
