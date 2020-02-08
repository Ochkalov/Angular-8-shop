import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-order',
  templateUrl: './select-order.component.html',
  styleUrls: ['./select-order.component.less']
})
export class SelectOrderComponent implements OnInit {

  @Input()
  initial: string;

  @Input()
  options: { value: string, label?: string }[];

  @Input()
  label: string;

  @Output()
  selected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string): void {
    this.selected.emit(value);
  }

}
