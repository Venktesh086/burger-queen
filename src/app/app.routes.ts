import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'product/:id', component: ProductDetailsComponent }, // Product details route
    { path: 'cart', component: CartComponent }
];
