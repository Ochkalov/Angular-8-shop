import {ProductModel} from '../../products/models/product.model';

export type CartProductModel = Partial<ProductModel & { count: number }>;
