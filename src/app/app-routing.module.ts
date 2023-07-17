import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/body/product-page/product-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductsContainerComponent } from './components/body/products-container/products-container.component';
import { CartContainerComponent } from './components/body/cart-container/cart-container.component';
import { checkoutGuard } from './checkout.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [checkoutGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
