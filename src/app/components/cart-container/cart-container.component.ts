import { Component, OnInit, inject } from '@angular/core';
import { Observable, from, map, mergeMap, tap } from 'rxjs';
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
  //cart: CartItem[] = [];

  ngOnInit(): void {
    //this.cartService.getCartItems().subscribe((x) => (this.cart = x));
    this.cart$ = this.cartService.getCartItems();
  }

  onClick() {
    //this.cart.map((y) => (y = { ...y, quantity: y.quantity + 1 }));
    // this.cart = [...this.cart,{product:{
    //   id: 0,
    //   title: '',
    //   price: 0,
    //   description: '',
    //   category: '',
    //   image: '',
    //   rating: {
    //     rate: 0,
    //     count: 0
    //   }
    // },quantity:1}]
    console.log('hello');
  }
}
