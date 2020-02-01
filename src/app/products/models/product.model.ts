export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public isAvailable: boolean,
    public price: number
  ) { }
}
