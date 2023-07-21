import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { BodyComponent } from './body.component';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      { path: '', redirectTo: 'page', pathMatch: 'full' },
      { path: 'page', component: ProductsContainerComponent },
      { path: 'details/:id', component: ProductPageComponent },
      { path: 'cart', component: CartContainerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyRoutingModule {}
