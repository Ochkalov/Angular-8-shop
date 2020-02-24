import {UserServiceModel} from '../models/user-service.model';
import {UserRole} from '../../core/models/role.enum';

export const serverUsers: UserServiceModel[] = [
  {
    id: 1,
    login: 'user',
    password: 'user',
    email: 'user@gmail.com',
    roles: []
  },
  {
    id: 2,
    login: 'admin',
    password: 'admin',
    email: 'admin@gmail.com',
    roles: [UserRole.ADMIN]
  }];
