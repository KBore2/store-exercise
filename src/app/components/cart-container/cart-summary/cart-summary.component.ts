import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CartItem } from 'src/app/types/CartItem';

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
    console.log(this.cart);
    this.totalPrice = this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

    console.log('price ' + this.totalPrice);

    this.totalItems = this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
