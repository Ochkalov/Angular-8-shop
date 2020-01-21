import { Component, OnInit } from '@angular/core';
import {Category} from './category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less']
})
export class FirstComponent implements OnInit {

  name = 'Yurii';
  description = 'Shop For Yurii';
  price = 100;
  category: Category;
  isAvailable = true;
  arr: number[] = [1, 2, 3, 4, 5];
  arrStr: string[] = ['a', 'b', 'c'];

  constructor() { }

  ngOnInit() {
  }

}
