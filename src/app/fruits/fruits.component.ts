import { Component, OnInit } from '@angular/core';
import { GetService } from '../Services/get.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  quantity:any=0;
  fruits: any;
  constructor(private FruitData: GetService,private cartService:CartService) {
    this.FruitData.GetFruits().subscribe(data => {
      this.fruits = data;

    });

  }
  plus(fruit){
    if(fruit.quantity!=5)
    {
      
      fruit.quantity = fruit.quantity + 1;
    }
    // this.cartService.plus(fruit);
  }
  minus(fruit){
    if(fruit.quantity != 1)
  {
    fruit.quantity = fruit.quantity - 1;

  }
  // this.cartService.minus(fruit);
  }

  ngOnInit(): void {
    // this.cartService.getProducts().subscribe(data=>{
    //   this.fruits = data;
    // })
  }

  

  addtocart(item: any){
    console.log(item);
    this.cartService.addtoCart(item);
  }
  cartNumber:number = 0;
  cartNumberFun(){
    var cartValue =JSON.parse(localStorage.getItem('localCart'));
    this.cartNumber = cartValue.length;
    console.log( this.cartNumber);
  }

}
