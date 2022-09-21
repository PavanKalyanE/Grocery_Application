import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdmenuComponent } from './admenu/admenu.component';
import { AduserComponent } from './aduser/aduser.component';
import { BiscuitsComponent } from './biscuits/biscuits.component';
import { CartComponent } from './cart/cart.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { ShopRegisterComponent } from './shop-register/shop-register.component';
import { ShopLoginComponent } from './shop-login/shop-login.component';
import { ShopDashboardComponent } from './shop-dashboard/shop-dashboard.component';
import { MyorderComponent } from './myorder/myorder.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Order', component: OrderComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: 'Admin', component: AdloginComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'AdMenu', component: AdmenuComponent },
  { path: 'AdUser', component: AduserComponent },
  { path: 'Fruits', component: FruitsComponent },
  {path:'Biscuits', component:BiscuitsComponent},
  {path: 'Vegetables' , component:VegetableComponent},
  {path: 'colddrinks', component:ColddrinksComponent},
  {path : 'Cart', component:CartComponent},
  {path : 'ShopLogin', component:ShopLoginComponent},
  {path : 'ShopRegister', component:ShopRegisterComponent},
  {path : 'ShopDashboard', component:ShopDashboardComponent},
  {path : 'MyOrder', component:MyorderComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
