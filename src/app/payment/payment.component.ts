import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public cartItemList : any =[]
  registrationForm:any
  constructor(private http:HttpClient, private cart:CartService, private fb:FormBuilder) {
    this.createRegistrationForm();
   }

 
  public products : any = [];
  public grandTotal !: number;
 
  createRegistrationForm(): void{
    this.registrationForm = this.fb.group({
      card_Name: ['',Validators.required],
      card_Number: ['',Validators.required],
      mobile:['',Validators.required],
      ex_Month:['',Validators.required],
      ex_Year:['',Validators.required],
      cvv:['',Validators.required],
      amount:['',Validators.required]
     
    });
}


  ngOnInit(): void {

    this.cart.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cart.getTotalPrice();
    })

  }

    
   
  // public Payment:any={card_Name:''

// };
handleClear():void{
  this.registrationForm.reset();
}
payment(){
  // console.log(this.registrationForm);
  this.http.post('http://localhost:5184/api/User/Post_Payment',this.registrationForm.value,{ responseType: 'text' }).subscribe(data=>{
 
  console.log(data);
  if(data == "Payment Succesful")
  {
    success=>{
      if(success){
        console.log(success);
        alert("payment Successful");
      }
    };
  }
 
},

error=>{
  if(error){
    console.log(error);
    alert("Payment Succesfull");
  }
}
);
}
}
