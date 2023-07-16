import { createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';
import { Cart } from 'src/app/types/Cart';

export const cartFeatureKey = 'cart';

export interface CartState {
  cart: Cart[];
  error: string;
  status: 'pending' | 'loading' | 'success' | 'error' | 'saved';
}

export const initialState: CartState = {
  cart: [],
  error: '',
  status: 'pending',
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.saveCart, (state) => ({ ...state, status: 'saved' as const })),
  on(CartActions.addToCart, (state, { productId }) => {
    const item = state.cart.find((x) => x.productId === productId) ?? null;
    if (item !== null) {
      return {
        ...state,
        cart: state.cart.map((cart) =>
          cart.productId === productId
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart
        ),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { productId: productId, quantity: 1 }],
      };
    }
  }),
  on(CartActions.removeFromCart, (state, { productId }) => {
    console.log('ghfghhghgf');
    const item = state.cart.find((x) => x.productId === productId);
    if (item!.quantity === 1) {
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.productId !== productId),
      };
    } else {
      return {
        ...state,
        cart: state.cart.map((cart) =>
          cart.productId === productId
            ? { ...cart, quantity: cart.quantity - 1 }
            : cart
        ),
      };
    }
  }),
  on(CartActions.loadCart, (state) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(CartActions.loadCartSuccess, (state, { cart }) => {
    console.log(cart);
    return {
      ...state,
      cart: cart,
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
