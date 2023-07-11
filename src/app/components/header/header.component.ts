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
import { CartActions } from 'src/app/state/cart/cart.actions';
import { selectCart } from 'src/app/state/app-state';

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

  getTotalItems$ = this.cart$.subscribe(
    (cart) =>
      (this.totalCartItems = cart.reduce(
        (total, items) => (total += items.quantity),
        0
      ))
  );

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadCart());
  }

  ngOnDestroy(): void {
    this.getTotalItems$.unsubscribe();
  }
}
