import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart/cart.reducer';
import { CartEffects } from './state/cart/cart.effects';
import { EffectsModule } from '@ngrx/effects';
import { CartItemsEffects } from './state/cart-items/cart-items.effects';
import { cartItemsReducer } from './state/cart-items/cart-items.reducer';
import { BodyModule } from './components/body/body.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    BodyModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ cart: cartReducer, cartItems: cartItemsReducer }),
    EffectsModule.forRoot(CartEffects, CartItemsEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
