import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FormattedDirective } from './directives/formatted.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SelectOrderComponent } from './components/select-order/select-order.component';



@NgModule({
  declarations: [HighlightDirective, FormattedDirective, OrderByPipe, SelectOrderComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, HighlightDirective, FormattedDirective, OrderByPipe, SelectOrderComponent]
})
export class SharedModule { }
