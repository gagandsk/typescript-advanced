import { Product } from "./product.model";
import { CreateProductDto } from "./product.dto";
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const createProduct = (data: CreateProductDto): Product => {

  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }

  products.push(newProduct);
  return newProduct;
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

