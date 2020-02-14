import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FormattedDirective } from './directives/formatted.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SelectOrderComponent } from './components/select-order/select-order.component';

const dirCompPipe = [HighlightDirective, FormattedDirective, OrderByPipe, SelectOrderComponent];

@NgModule({
  declarations: [...dirCompPipe],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, ...dirCompPipe]
})
export class SharedModule { }
