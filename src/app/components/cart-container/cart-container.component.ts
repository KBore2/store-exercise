import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/types/CartItem';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss'],
})
export class CartContainerComponent implements OnInit {
  cartService = inject(CartService);

  cart$!: Observable<CartItem[]>;

  ngOnInit(): void {
    this.cart$ = this.cartService.getCartItems();
  }

  // onClick() {
  //   console.log(1234);
  //   let cart = this.cartService.getCartItems().subscribe();
  // }
}
