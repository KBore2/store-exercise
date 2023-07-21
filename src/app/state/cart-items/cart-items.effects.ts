import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  from,
  map,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Store } from '@ngrx/store';
import { selectCart } from '../app-state';
import { CartItemsActions } from './cart-items.actions';

@Injectable()
export class CartItemsEffects {
  actions$ = inject(Actions);
  cartService = inject(CartService);
  store = inject(Store);

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      tap((x) => console.log('h')),
      ofType(CartItemsActions.loadCartItems),
      withLatestFrom(this.store.select(selectCart)),
      exhaustMap(([action, cart]) =>
        this.cartService.getCartItems(cart).pipe(
          map((cartItems) =>
            CartItemsActions.loadCartItemsSuccess({ cartItems })
          ),
          catchError((error) =>
            of(CartItemsActions.loadCartItemsFailure(error))
          )
        )
      )
    )
  );
}
