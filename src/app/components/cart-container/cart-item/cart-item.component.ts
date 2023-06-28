import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartItem } from 'src/app/types/CartItem';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;

  productsService = inject(ProductsService);

  ngOnInit(): void {
    console.log(this.cartItem);
  }
}
