import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartItem } from 'src/app/types/CartItem';
import { State } from './cart.reducer';

export const selectCartState = createFeatureSelector<State>('cart');

export const selectCart = createSelector(
  selectCartState,
  (cart) => cart.cartItems
);
