import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FormattedDirective } from './directives/formatted.directive';



@NgModule({
  declarations: [HighlightDirective, FormattedDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, FormattedDirective]
})
export class SharedModule { }
