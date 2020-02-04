import { Injectable } from '@angular/core';
import {CoreModule} from '../core.module';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private readonly configOptions: object;

  constructor(configOptions = {}) {
    this.configOptions = configOptions;
  }

  set(optionKey, optionValue): void {
    this.configOptions[optionKey] = optionValue;
  }

  get(optionKey): any {
    return this.configOptions[optionKey];
  }

  getAll(): object {
    return this.configOptions;
  }
}
