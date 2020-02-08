import {IProductModel} from '../models/product.model';

export const products: IProductModel[] = [
  {
  name: 'Avengers: Endgame',
  price: 8.5,
  date: 'Mon Oct 07 2019 16:00:58 GMT+0300',
    // tslint:disable-next-line:max-line-length
  description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
  isAvailable: true
  },
  {
    name: 'Black Widow',
    price: 4.5,
    date: 'Mon Oct 07 2020 10:00:58 GMT+0300',
    description: 'A film about Natasha Romanoff in her quests between the films Civil War and Infinity War',
    isAvailable: false
  },
  {
    name: 'Spider-Man: Far from Home ',
    price: 5,
    date: 'Mon Oct 08 2018 16:00:58 GMT+0300',
    // tslint:disable-next-line:max-line-length
    description: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.',
    isAvailable: true
  },
  {
    name: 'Captain Marvel',
    price: 6,
    date: 'Mon Oct 09 2017 19:00:58 GMT+0300',
    // tslint:disable-next-line:max-line-length
    description: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
    isAvailable: true
  },
  {
    name: 'Avengers: Infinity War',
    price: 8,
    date: 'Mon Oct 02 2016 14:00:58 GMT+0300',
    // tslint:disable-next-line:max-line-length
    description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    isAvailable: true
  }
  ];
