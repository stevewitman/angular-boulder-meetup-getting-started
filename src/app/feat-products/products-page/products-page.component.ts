import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/services/products.service';

import { Product } from '../product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  selectedProduct: Product | undefined;

  productsList: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsList = this.productsService.getProducts();
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

}
