import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  selectedProduct: Product | undefined;

  productsList: Product[] = [];

  productsAvailable: Product[] = [
    {
      id: 1,
      title: 'Desk',
      retailPrice: 799.5,
    },
    {
      id: 2,
      title: 'Chair',
      retailPrice: 350,
    },
    {
      id: 3,
      title: 'Chair Mat',
      retailPrice: 49.95,
    },
    {
      id: 4,
      title: 'Trash Can',
      retailPrice: 7.99,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.productsList = this.productsAvailable;
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

}
