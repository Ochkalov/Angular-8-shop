import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface IOptionsSelectOrder {
  value: string;
  label?: string;
}

@Component({
  selector: 'app-select-order',
  templateUrl: './select-order.component.html',
  styleUrls: ['./select-order.component.less']
})
export class SelectOrderComponent implements OnInit {

  @Input()
  initial: string;

  @Input()
  options: IOptionsSelectOrder[];

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
