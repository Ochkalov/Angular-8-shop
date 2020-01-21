import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log('You have bought a product');
  }
}
