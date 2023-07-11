import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Cart } from 'src/app/types/Cart';
import { CartItem } from 'src/app/types/CartItem';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnChanges {
  @Input()
  cart!: CartItem[];

  totalItems = 0;
  totalPrice = 0;

  ngOnChanges() {
    this.totalPrice = this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    this.totalItems = this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
