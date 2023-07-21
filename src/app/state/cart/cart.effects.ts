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
import { CartActions } from './cart.actions';
import { Store } from '@ngrx/store';
import { selectCart } from '../app-state';

@Injectable()
export class CartEffects {
  actions$ = inject(Actions);
  cartService = inject(CartService);
  store = inject(Store);

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      tap((x) => console.log('h')),
      ofType(CartActions.loadCart),
      exhaustMap(() =>
        this.cartService.getCart().pipe(
          map((cart) => CartActions.loadCartSuccess({ cart })),
          catchError((error) => of(CartActions.loadCartFailure(error)))
        )
      )
    )
  );

  saveCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.saveCart),
      withLatestFrom(this.store.select(selectCart)),
      switchMap(([action, cart]) => from(this.cartService.saveCart(cart)))
    )
  );
}
