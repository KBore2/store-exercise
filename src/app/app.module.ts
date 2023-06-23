import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ProductCardComponent } from './products-container/product-card/product-card.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CartItemComponent } from './cart-container/cart-item/cart-item.component';
import { CartSummaryComponent } from './cart-container/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ProductCardComponent,
    ProductsContainerComponent,
    CartContainerComponent,
    CartItemComponent,
    CartSummaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
