import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

 
export class CartComponent implements OnInit {
  cartItems:any=[];
  images=this.cartItems;
  total = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems,'cartitems');
    this.calculateTotal();
  }

  updateQuantity(id: number, quantity: number) {
    if (quantity > 0) {
      this.cartService.updateQuantity(id, quantity);
      this.calculateTotal();
    }
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartService.calculateTotal();
  }

  checkout() {
    console.log('JSON Response:', this.cartItems);
  }



}
