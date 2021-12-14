import { Injectable } from '@angular/core';

import { Product } from '../../feat-products/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsAvailable: Product[] = [
    {
      id: 1,
      title: 'Desk',
      retailPrice: 699.5,
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

  getProducts(): Product[] {
    return this.productsAvailable;
  }
  
}
