import { CartSummaryComponent } from './cart-container/cart-summary/cart-summary.component';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CartItemComponent } from './cart-container/cart-item/cart-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductCardComponent } from './products-container/product-card/product-card.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BodyComponent } from './body.component';

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    CartSummaryComponent,
    CartContainerComponent,
    CartItemComponent,
    ProductPageComponent,
    ProductCardComponent,
    ProductsContainerComponent,
  ],
  imports: [CommonModule, MatIconModule, BodyRoutingModule],
})
export class BodyModule {}
