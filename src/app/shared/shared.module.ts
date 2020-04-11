import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FormattedDirective } from './directives/formatted.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SelectOrderComponent } from './components/select-order/select-order.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { InputErrorsComponent } from './components/input-errors/input-errors.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

const dirCompPipe = [
  HighlightDirective,
  FormattedDirective,
  OrderByPipe,
  SelectOrderComponent,
  NavComponent,
  InputComponent,
  InputErrorsComponent
];

@NgModule({
  declarations: [...dirCompPipe, InputErrorsComponent, InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [CommonModule, ...dirCompPipe]
})
export class SharedModule { }
