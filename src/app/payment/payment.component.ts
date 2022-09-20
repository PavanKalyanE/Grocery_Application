import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm:any
  constructor(private http:HttpClient,private formBuilder:FormBuilder) { 
    this.makePayment();
  }
makePayment():void{
  this.paymentForm=this.formBuilder.group({
    cardName: ['',Validators.required],
    mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    cardNumber:['',Validators.required,Validators.minLength(16),Validators.maxLength(16)],
    month:['',Validators.required],
    CVV:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
    year: ['',[Validators.required, ]],
    amount:['',Validators.required]
  });
}
  ngOnInit(): void {
  }
  public Payment:any={Card_Name:''

};
payment(){
  this.http.post('http://localhost:5184/api/Payments',this.paymentForm.value,{ responseType: 'text' }).subscribe(data=>{
 
  console.log(data);
},
error=>{
  if(error){
    console.log(error);
    alert("Sorry unable to register");
  }
}
);
}
get field() { return this.paymentForm.controls; }
}
