import { Component, OnInit } from '@angular/core';
import { GetService } from '../Services/get.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-biscuits',
  templateUrl: './biscuits.component.html',
  styleUrls: ['./biscuits.component.css']
})
export class BiscuitsComponent implements OnInit {

  biscuits:any;
  constructor(private BiscuitData:GetService ,private cartService:CartService) {
    this.BiscuitData.GetBiscuits().subscribe(data => {
      this.biscuits = data;
    })
   }

  ngOnInit(): void {
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }


}
