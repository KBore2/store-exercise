import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, from, map, of, switchMap, tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CartActions } from './cart.actions';

@Injectable()
export class CartEffects {
  actions$ = inject(Actions);
  cartService = inject(CartService);

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      tap((x) => console.log('h')),
      ofType(CartActions.loadCart),
      exhaustMap(() =>
        this.cartService.getCartItems().pipe(
          map((cart) => CartActions.loadCartSuccess({ cart })),
          catchError((error) => of(CartActions.loadCartFailure(error)))
        )
      )
    )
  );
}
