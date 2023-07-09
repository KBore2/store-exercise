import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { selectCart } from 'src/app/state/cart/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartService = inject(CartService);
  store = inject(Store);
  totalCartItems = 0;

  cart$ = this.store.select(selectCart);
  getTotalCartIems$ = this.cart$.subscribe(
    (cart) =>
      (this.totalCartItems = cart.reduce(
        (total, items) => (total += items.quantity),
        0
      ))
  );

  ngOnInit(): void {
    this.cartService
      .getCartTotalItems()
      .subscribe((x) => (this.totalCartItems = x));

    console.log(this.totalCartItems);
  }

  ngOnDestroy(): void {
    this.getTotalCartIems$.unsubscribe();
  }
}
