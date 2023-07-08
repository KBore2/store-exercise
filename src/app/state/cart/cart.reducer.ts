import { createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';
import { CartItem } from 'src/app/types/CartItem';
import { state } from '@angular/animations';

export const cartFeatureKey = 'cart';

export interface State {
  cartItems: CartItem[];
  error: string;
  status: 'pending' | 'loading' | 'success' | 'error';
}

export const initialState: State = {
  cartItems: [],
  error: '',
  status: 'pending',
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.updateCarts, (state, { cartItemId, qauntity }) => {
    console.log(qauntity);
    return {
      ...state,
      cartItems: state.cartItems.map((cart) =>
        cart.product.id === cartItemId ? { ...cart, quantity: qauntity } : cart
      ),
    };
  }),
  on(CartActions.loadCart, (state) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(CartActions.loadCartSuccess, (state, { cart }) => {
    return {
      ...state,
      cartItems: cart,
      status: 'success' as const,
    };
  }),
  on(CartActions.loadCartFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
      status: 'error' as const,
    };
  })
);
