import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-colddrinks',
  templateUrl: './colddrinks.component.html',
  styleUrls: ['./colddrinks.component.css']
})
export class ColddrinksComponent implements OnInit {
colddrinks:any;
  constructor(private colddrinkData :GetService, private cartService:CartService) {
    this.colddrinkData.GetColddrinks().subscribe(data => {
      this.colddrinks = data;
    })
   }
   addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  ngOnInit(): void {
  }

}
