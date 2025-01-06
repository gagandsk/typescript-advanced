import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  //data.id = 'aaa';
  products.push(data)
}
