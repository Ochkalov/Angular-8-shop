import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class InputComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  textarea = false;

  @Input()
  type = 'text';

  @Input()
  placeholder = '';

  @Input()
  control: FormControl;

  public id = Math.round(Math.random() * +new Date());

  constructor() { }

  ngOnInit() {
  }

}
