import { CartItems } from './../models/cartItems';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(user: User) {
    let item = CartItems.find((c) => c.user.userId === user.id);

    if (item) {
      item.quantity++;
    } else {
      let cartItem = new CartItem();
      cartItem.user = user;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(user: User) {
    let item: CartItem = CartItems.find((c) => c.user.userId === user.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }
}
