export interface IProductModel {
  id: number;
  name: string;
  price: number;
  date: string;
  description: string;
  isAvailable: boolean;
}

export class ProductModel {
  id: number;
  name: string;
  price: number;
  date: string;
  description: string;
  isAvailable: boolean;

  constructor(product: IProductModel) {
    Object.assign(this, product);

    // this.id = Math.round(Math.random() * +new Date());
  }
}
