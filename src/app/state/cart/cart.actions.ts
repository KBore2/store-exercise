import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cart } from 'src/app/types/Cart';
import { CartItem } from 'src/app/types/CartItem';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Save cart': emptyProps(),
    'Add To Cart': props<{ productId: number }>(),
    'Remove From Cart': props<{ productId: number }>(),
    'Load Cart': emptyProps(),
    'Load Cart Success': props<{ cart: Cart[] }>(),
    'Load Cart Failure': props<{ error: string }>(),
  },
});
