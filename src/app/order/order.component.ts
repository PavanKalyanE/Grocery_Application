import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public productList : any ;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.productList = res;
      
      this.productList.forEach((a:any) => {
       
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
  }

addtocart(item: any){
  this.cartService.addtoCart(item);
}

}
