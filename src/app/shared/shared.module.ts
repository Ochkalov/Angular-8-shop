import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FormattedDirective } from './directives/formatted.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SelectOrderComponent } from './components/select-order/select-order.component';
import { NavComponent } from './components/nav/nav.component';
import {RouterModule} from '@angular/router';

const dirCompPipe = [HighlightDirective, FormattedDirective, OrderByPipe, SelectOrderComponent, NavComponent];

@NgModule({
  declarations: [...dirCompPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommonModule, ...dirCompPipe]
})
export class SharedModule { }
