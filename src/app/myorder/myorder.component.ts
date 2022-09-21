import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  // public cartItemList : any =[]
  constructor(private cartservice:CartService) { }
  public cartItemList : any =[] = JSON.parse(localStorage.getItem('localCart')); 

  public totalprice:any;

  ngOnInit(): void {
    this.totalprice = this.cartservice.getTotalPrice();
  }

}
