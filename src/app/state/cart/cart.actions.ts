import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CartItem } from 'src/app/types/CartItem';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Update Carts': props<{ cartItemId: number; qauntity: number }>(),
    'Load Cart': emptyProps(),
    'Load Cart Success': props<{ cart: CartItem[] }>(),
    'Load Cart Failure': props<{ error: string }>(),
  },
});
