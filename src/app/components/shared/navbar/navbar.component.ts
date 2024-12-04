import { Component, OnInit } from '@angular/core';
import { routes } from '../../../app.routes';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(public router:Router){

  }
  ngOnInit() {
    
  }
  homePage(){
    this.router.navigate(['/']);
  }
  cartPage(){
    this.router.navigate(['/cart']);
  }

}
