import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/types/CartItem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  @Input() cart!: CartItem[];
  totalItems = 0;
  totalPrice = 0;

  ngOnInit(): void {
    console.log(this.cart);
    this.totalPrice = this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

    console.log(this.totalPrice);

    this.totalItems = this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
