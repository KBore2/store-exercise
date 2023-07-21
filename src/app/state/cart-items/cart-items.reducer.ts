import { createReducer, on } from '@ngrx/store';
import { CartItem } from 'src/app/types/CartItem';
import { CartItemsActions } from './cart-items.actions';

export const cartFeatureKey = 'cartItems';

export interface CartItemsState {
  cartItems: CartItem[];
  error: string;
  status: 'pending' | 'loading' | 'success' | 'error' | 'saved';
}

export const initialState: CartItemsState = {
  cartItems: [],
  error: '',
  status: 'pending',
};

export const cartItemsReducer = createReducer(
  initialState,
  on(CartItemsActions.addToCartItems, (state, { productId }) => {
    console.log('hhh');
    return {
      ...state,
      cartItems: state.cartItems.map((cart) =>
        cart.product.id === productId
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      ),
    };
  }),
  on(CartItemsActions.removeFromCartItems, (state, { productId }) => {
    const item = state.cartItems.find((x) => x.product.id === productId);
    console.log(item);
    if (item!.quantity === 1) {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cart) => cart.product.id !== productId
        ),
      };
    } else {
      return {
        ...state,
        cartItems: state.cartItems.map((cart) =>
          cart.product.id === productId
            ? { ...cart, quantity: cart.quantity - 1 }
            : cart
        ),
      };
    }
  }),
  on(CartItemsActions.loadCartItems, (state) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(CartItemsActions.loadCartItemsSuccess, (state, { cartItems }) => {
    console.log(cartItems);
    return {
      ...state,
      cartItems: cartItems,
      status: 'success' as const,
    };
  }),
  on(CartItemsActions.loadCartItemsFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
      status: 'error' as const,
    };
  })
);
