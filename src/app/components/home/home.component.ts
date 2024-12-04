import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  items = [
    { id: 1, name: 'Cheese Burger', price: 389, image: 'assets/images/cheeseBurger.jpg' },
    { id: 2, name: 'Chicken Burger', price: 399, image: 'assets/images/chickenBurger.jpg' },
    { id: 3, name: 'Veg Burger', price: 499, image: 'assets/images/vegBurger.jpg' },
    { id: 4, name: 'Crispy Veg Burger', price: 499, image: 'assets/images/chrispyVegieBurger.jpg' },
   
  ];
  items2 = [
    { id: 5, name: 'Chicken Burger', price: 389, image: 'assets/images/chickenBurger.jpg' },
    { id: 6, name: 'Crispy Veg Burger', price: 399, image: 'assets/images/chrispyVegieBurger.jpg' },
    { id: 7, name: 'Veg Burger', price: 499, image: 'assets/images/vegBurger.jpg' },
    { id: 8, name: 'chicken Tandoor Burger', price: 499, image: 'assets/images/chrispyVegieBurger.jpg' },
  ];
  items3 = [
    { id: 9, name: 'Chicken Burger', price: 399, image: 'assets/images/chickenBurger.jpg' },
    { id: 10, name: 'Veg Burger', price: 499, image: 'assets/images/vegBurger.jpg' },
    { id: 11, name: 'Crispy Veg Burger', price: 499, image: 'assets/images/chrispyVegieBurger.jpg' },
    { id: 12, name: 'Special Burger', price: 499, image: 'assets/images/cheeseBurger.jpg' },
  ];
  constructor(private cartService: CartService, public router:Router) {}

  addToCart(item: any) {
    this.cartService.addToCart({ ...item, quantity: 1 });
  }

  productDetails(item: any) {

    const itemString = encodeURIComponent(JSON.stringify(item))
    this.router.navigateByUrl(`/product/?item=${itemString}`);

  }

}
