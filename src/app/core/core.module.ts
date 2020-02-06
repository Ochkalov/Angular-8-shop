import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConstantService} from './services/constant.service';
import {Generated, GenerateFactory, GeneratorService} from './services/generator';
import {ConfigOptionsService} from './services/config-options.service';

const constants = new ConstantService({ App: 'Shop', Ver: '1.0' });

const config = new ConfigOptionsService({
  id: 123,
  user: 'yurii',
  email: 'yurii@email.com'
});

@NgModule({
  declarations: [],
  imports: [
    CommonModule
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
  ]
})
export class CoreModule { }
