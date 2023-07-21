import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cart } from 'src/app/types/Cart';
import { CartItem } from 'src/app/types/CartItem';

export const CartItemsActions = createActionGroup({
  source: 'CartItems',
  events: {
    'Add To CartItems': props<{ productId: number }>(),
    'Remove From CartItems': props<{ productId: number }>(),
    'Load CartItems': emptyProps(),
    'Load CartItems Success': props<{ cartItems: CartItem[] }>(),
    'Load CartItems Failure': props<{ error: string }>(),
  },
});
