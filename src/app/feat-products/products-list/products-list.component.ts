import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() productsList: Product[] = [];

  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

}
