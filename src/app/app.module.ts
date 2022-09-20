import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { InvalidComponent } from './invalid/invalid.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AduserComponent } from './aduser/aduser.component';
import { AdmenuComponent } from './admenu/admenu.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitServiceService } from './Services/fruit-service.service';
import { ShoploginComponent } from './shoplogin/shoplogin.component';
import { ShopresComponent } from './shopres/shopres.component';

// import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
// import { FormBuilder,FormGroup } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    OrderComponent,
    PaymentComponent,
    InvalidComponent,
    AdloginComponent,
    DashboardComponent,
    AduserComponent,
    AdmenuComponent,
    FruitsComponent,
    ShoploginComponent,
    ShopresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService, FruitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
