import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConstantService} from './services/constant.service';
import {Generated, GenerateFactory, GeneratorService} from './services/generator';
import {ConfigOptionsService} from './services/config-options.service';
import {SharedModule} from '../shared/shared.module';
import {LocalStorageService} from './services/local-storage.service';

const constants = new ConstantService({ App: 'Shop', Ver: '1.0' });

const config = new ConfigOptionsService({
  id: 123,
  user: 'yurii',
  email: 'yurii@email.com'
});

@NgModule({
  declarations: [],
  imports: [
    SharedModule
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
