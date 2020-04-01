import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsEffects } from '../core/store/products/products.effects';
import { productsFeatureKey, productsReducer } from '../core/store/products/products.reducer';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



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
    SharedModule,
    RouterModule,
    HttpClientModule,

    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsModule { }
