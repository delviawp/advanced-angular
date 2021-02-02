import { Order, OrdersComponent } from './advanced-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  products!: Order[]

  constructor(public items: OrdersComponent) { }

  ngOnInit(): void {
    this.products = this.items.orders;
  }
}
