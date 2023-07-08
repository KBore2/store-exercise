import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from, map, mergeMap, tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CartActions } from 'src/app/state/cart/cart.actions';
import { selectCart } from 'src/app/state/cart/cart.selectors';
import { CartItem } from 'src/app/types/CartItem';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
})
export class CartContainerComponent implements OnInit, OnDestroy {
  cartService = inject(CartService);
  store = inject(Store);
  count = 0;

  cart$ = this.store.select(selectCart);

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadCart());
  }

  ngOnDestroy(): void {
    this.store.dispatch(CartActions.saveCart());
  }

  changeQuantity(cartItem: { id: number; quantity: number }) {
    this.store.dispatch(
      CartActions.updateCarts({
        cartItemId: cartItem.id,
        qauntity: cartItem.quantity,
      })
    );
  }
}
