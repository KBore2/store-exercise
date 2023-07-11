import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartItem } from 'src/app/types/CartItem';
import { CartItemsState } from './cart-items/cart-items.reducer';
import { CartState } from './cart/cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');
export const selectCartItemsState =
  createFeatureSelector<CartItemsState>('cartItems');

export const selectCart = createSelector(selectCartState, (cart) => cart.cart);

export const selectCartItems = createSelector(
  selectCartItemsState,
  (cart) => cart.cartItems
);
