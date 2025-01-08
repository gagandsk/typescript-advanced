import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  //data.id = 'aaa';
  products.push(data)
}

export const updateProduct = (id: string, changes: Product) => {
  // code
}

export const deleteProduct = (id: string) => {
  // code
}

export const findProduct = (id: string) => {
  // code
}

export const getProduct = (id: string) => {
  // code
}

