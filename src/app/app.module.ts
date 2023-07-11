import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { ProductCardComponent } from './components/products-container/product-card/product-card.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { CartItemComponent } from './components/cart-container/cart-item/cart-item.component';
import { CartSummaryComponent } from './components/cart-container/cart-summary/cart-summary.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart/cart.reducer';
import { CartEffects } from './state/cart/cart.effects';
import { EffectsModule } from '@ngrx/effects';
import { CartItemsEffects } from './state/cart-items/cart-items.effects';
import { cartItemsReducer } from './state/cart-items/cart-items.reducer';

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
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({ cart: cartReducer, cartItems: cartItemsReducer }),
    EffectsModule.forRoot(CartEffects, CartItemsEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
