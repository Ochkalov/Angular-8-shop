import { NgModule } from '@angular/core';
import {ProductComponent} from './components/product/product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {SharedModule} from '../shared/shared.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  exports: [
    ProductListComponent,
  ],
  imports: [
    SharedModule, RouterModule
  ]
})
export class ProductsModule { }
