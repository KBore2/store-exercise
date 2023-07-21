import { Injectable, inject } from '@angular/core';
import {
  Observable,
  catchError,
  from,
  map,
  mergeMap,
  of,
  tap,
  toArray,
} from 'rxjs';
import { CartItem } from '../types/CartItem';
import { ProductsService } from './products.service';
import { Product } from '../types/Product';
import { Cart } from '../types/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart[] = [
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

  getCart(): Observable<Cart[]> {
    return of(this.cart);
  }

  getCartItems(cart: Cart[]): Observable<CartItem[]> {
    return of(cart).pipe(
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
              ),
              catchError((error) => of(error))
            )
          )
        )
      ),
      toArray()
    );
  }

  getCartTotalItems(): Observable<number> {
    return of(this.cart.reduce((total, item) => (total += item.quantity), 0));
  }

  addItemToCart(itemId: number): Observable<any> {
    const item = this.cart.find((x) => x.productId === itemId) ?? null;
    if (item !== null) {
      item!.quantity = item!.quantity + 1;
    } else {
      this.cart = [...this.cart, { productId: itemId, quantity: 1 }];
    }

    return of(this.cart);
  }

  saveCart(cart: Cart[]): Observable<any> {
    const newCart = cart.map((x) => ({
      productId: x.productId,
      quantity: x.quantity,
    }));

    this.cart = newCart;

    return of();
  }
}
