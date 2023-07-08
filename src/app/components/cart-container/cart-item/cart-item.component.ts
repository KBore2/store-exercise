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
import { CartItem } from 'src/app/types/CartItem';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Output() qauntityChangeEvent = new EventEmitter<{
    id: number;
    quantity: number;
  }>();

  DecreaseQuantity() {
    this.qauntityChangeEvent.emit({
      id: this.cartItem.product.id,
      quantity: this.cartItem.quantity - 1,
    });
  }

  IncreaseQuantity() {
    this.qauntityChangeEvent.emit({
      id: this.cartItem.product.id,
      quantity: this.cartItem.quantity + 1,
    });
  }
}
