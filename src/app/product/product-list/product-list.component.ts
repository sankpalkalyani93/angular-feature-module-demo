import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = [
    { id: 1, name: 'Product1', price: 100 },
    { id: 2, name: 'Product2', price: 500 },
    { id: 3, name: 'Product3', price: 300 }
  ]
}
