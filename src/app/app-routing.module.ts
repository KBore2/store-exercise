import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { CartContainerComponent } from './cart-container/cart-container.component';

const routes: Routes = [
  { path: '', component: ProductsContainerComponent },
  { path: 'cart', component: CartContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
