import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {

  vegetables:any;

  constructor(private vegetableData:GetService, private cartService:CartService) { 
    this.vegetableData.Getvegetables().subscribe(data => {
      this.vegetables = data;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  ngOnInit(): void {
  }

}
