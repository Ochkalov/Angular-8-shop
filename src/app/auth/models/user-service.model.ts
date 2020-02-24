import {SettingsModel} from '../../core/models/settings.model';

export interface UserServiceModel extends SettingsModel {
  password: string;
}
