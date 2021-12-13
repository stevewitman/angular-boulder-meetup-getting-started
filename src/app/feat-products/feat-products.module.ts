import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ProductsPageComponent, ProductsListComponent, ProductDetailsComponent],
  imports: [CommonModule],
  exports: [ProductsPageComponent],
})
export class FeatProductsModule {}
