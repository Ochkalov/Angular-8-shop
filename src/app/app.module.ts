import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {CartModule} from './cart/cart.module';
import {ProductsModule} from './products/products.module';
import {SharedModule} from './shared/shared.module';
import {AboutComponent} from './layout/components/about/about.component';
import {CoreModule} from './core/core.module';
import {OrdersModule} from './orders/orders.module';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TimingInterceptor} from './core/interceptors/timing.interceptor';

const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TimingInterceptor,
    multi: true
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CoreModule,
    CartModule,
    OrdersModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
