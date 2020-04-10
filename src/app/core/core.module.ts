import { NgModule } from '@angular/core';
import { ConstantService } from './services/constant.service';
import { Generated, GenerateFactory, GeneratorService } from './services/generator';
import { ConfigOptionsService } from './services/config-options.service';
import { SharedModule } from '../shared/shared.module';
import { LocalStorageService } from './services/local-storage.service';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreStoreModule } from './store/core-store.module';

const constants = new ConstantService({ App: 'Shop', Ver: '1.0' });

const config = new ConfigOptionsService({
  id: 123,
  user: 'yurii',
  email: 'yurii@email.com'
});

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CoreStoreModule,
// Желательно в одном модуле подключать все модули библиотеки, так проще ими управлять
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    GeneratorService,
    {
      provide: ConfigOptionsService,
      useValue: config },
    {
      provide: ConstantService,
      useValue: constants
    },
    {
      provide: Generated,
      useFactory: GenerateFactory(2),
      deps: [ GeneratorService ]
    },
    {
      provide: localStorage,
      useClass: LocalStorageService
    }
  ]
})
export class CoreModule { }
