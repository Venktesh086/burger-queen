import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
  }

  updateQuantity(id: number, quantity: number) {
    const item = this.cartItems.find(i => i.id === id);
    if (item) {
      item.quantity = quantity;
    }
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(i => i.id !== id);
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
