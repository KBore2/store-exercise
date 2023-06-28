import { Injectable, inject } from '@angular/core';
import { Observable, from, map, mergeMap, of, tap, toArray } from 'rxjs';
import { CartItem } from '../types/CartItem';
import { ProductsService } from './products.service';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = [
    {
      productId: 1,
      quantity: 2,
    },
    {
      productId: 2,
      quantity: 1,
    },
    {
      productId: 3,
      quantity: 3,
    },
  ];

  productsService = inject(ProductsService);

  getCartItems(): Observable<CartItem[]> {
    return of(this.cart).pipe(
      tap((x) => console.log(x)),
      mergeMap((cart) =>
        from(cart).pipe(
          mergeMap((cartItem) =>
            this.productsService.getProductById(cartItem.productId).pipe(
              map(
                (p: any) =>
                  (p = <CartItem>{
                    product: p,
                    quantity: cartItem.quantity,
                  })
              )
            )
          )
        )
      ),
      toArray(),
      tap((x) => console.log(x))
    );
  }
}
