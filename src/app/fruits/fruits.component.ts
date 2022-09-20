import { Component, OnInit } from '@angular/core';
import { FruitServiceService } from '../Services/fruit-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits: any;
  constructor(private FruitData: FruitServiceService) {
    this.FruitData.GetFruits().subscribe(data => {
      this.fruits = data;

    });

  }

  ngOnInit(): void {
  }

}
