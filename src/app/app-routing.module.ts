import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ProductsContainerComponent },
  { path: 'cart', component: CartContainerComponent },
  { path: 'details/:id', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
