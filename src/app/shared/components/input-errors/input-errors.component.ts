import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.less']
})
export class InputErrorsComponent implements OnInit {
  @Input() public control: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
