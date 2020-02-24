import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() {}

  @HostBinding('style.background-color')
  private bg: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bg = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bg = 'green';
  }

}
