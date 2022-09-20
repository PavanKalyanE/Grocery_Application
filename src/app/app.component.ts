import { Component } from '@angular/core';
import { __values } from 'tslib';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cap da Dhaba';
  constructor(private http:SharedService)
  {
   
  }

  }
