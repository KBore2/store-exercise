import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Cart } from 'src/app/types/Cart';
import { CartItem } from 'src/app/types/CartItem';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Output() decreaseQuantityEvent = new EventEmitter<number>();
  @Output() increaseQuantityEvent = new EventEmitter<number>();

  decreaseQuantity() {
    this.decreaseQuantityEvent.emit(this.cartItem.product.id);
  }

  increaseQuantity() {
    this.increaseQuantityEvent.emit(this.cartItem.product.id);
  }
}
