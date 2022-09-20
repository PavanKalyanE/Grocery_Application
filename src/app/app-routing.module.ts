import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdmenuComponent } from './admenu/admenu.component';
import { AduserComponent } from './aduser/aduser.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HomeComponent } from './home/home.component';
import { InvalidComponent } from './invalid/invalid.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoploginComponent } from './shoplogin/shoplogin.component';
import { ShopresComponent } from './shopres/shopres.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Order', component: OrderComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: 'Invalid', component: InvalidComponent },
  { path: 'Admin', component: AdloginComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'AdMenu', component: AdmenuComponent },
  { path: 'AdUser', component: AduserComponent },
  { path: 'Fruits', component: FruitsComponent },
  {path: 'Shoplogin', component:ShoploginComponent},
  {path :'Shopres', component:ShopresComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
