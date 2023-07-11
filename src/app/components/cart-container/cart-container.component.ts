import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from, map, mergeMap, switchMap, tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CartActions } from 'src/app/state/cart/cart.actions';
import { selectCart, selectCartItems } from 'src/app/state/app-state';
import { Cart } from 'src/app/types/Cart';
import { CartItem } from 'src/app/types/CartItem';
import { Product } from 'src/app/types/Product';
import { CartItemsActions } from 'src/app/state/cart-items/cart-items.actions';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
})
export class CartContainerComponent implements OnInit, OnDestroy {
  store = inject(Store);
  cartService = inject(CartService);
  count = 0;

  cartItems$ = this.store.select(selectCartItems);

  ngOnInit(): void {
    this.store.dispatch(CartItemsActions.loadCartItems());
  }

  ngOnDestroy(): void {
    this.store.dispatch(CartActions.saveCart());
  }

  decreaseQuantity(productId: number) {
    this.store.dispatch(
      CartActions.removeFromCart({
        productId,
      })
    );
    this.store.dispatch(
      CartItemsActions.removeFromCartItems({
        productId,
      })
    );
  }

  increaseQuantity(productId: number) {
    this.store.dispatch(
      CartActions.addToCart({
        productId,
      })
    );
    this.store.dispatch(
      CartItemsActions.addToCartItems({
        productId,
      })
    );
  }
}
