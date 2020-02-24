import { Injectable } from '@angular/core';
import {CoreModule} from '../core.module';
import {SettingsModel} from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private readonly configOptions: object;
  private settingsStorage: SettingsModel;

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

  set settings(newSettings: Partial<SettingsModel>) {
    this.settingsStorage = { ...this.settingsStorage, ...newSettings};
  }

  get settings(): Partial<SettingsModel> {
    return this.settingsStorage;
  }
}
