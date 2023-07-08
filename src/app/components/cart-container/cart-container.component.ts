import { Component, OnInit, inject } from '@angular/core';
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
export class CartContainerComponent implements OnInit {
  cartService = inject(CartService);
  store = inject(Store);
  count = 0;

  //cart$!: Observable<CartItem[]>;
  cart$ = this.store.select(selectCart);

  ngOnInit(): void {
    //this.cartService.getCartItems().subscribe((x) => (this.cart = x));
    this.store.dispatch(CartActions.loadCart());
    // this.cartService.getCartItems().subscribe((x) => {
    //   console.log(x);

    // });
  }

  onClick() {
    this.count = this.count + 1;
    this.store.dispatch(
      CartActions.updateCarts({
        cartItemId: 1,
        qauntity: this.count,
      })
    );
    console.log('hello');
  }
}
