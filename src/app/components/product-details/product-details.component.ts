import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {
  product: any = {};
  quantity = 1;
  item: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
  
     this.route.queryParams.subscribe((params)=>{
      const itemString = params['item'];
      if (itemString) {
        this.item = JSON.parse(decodeURIComponent(itemString));
      }
      this.product = {
        id: this.item.id,
        name: this.item.name,
        price: this.item.price,
        image: this.item.image,
      };
     
    });
   
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    this.cartService.addToCart({ ...this.product, quantity: this.quantity });
  }



}
