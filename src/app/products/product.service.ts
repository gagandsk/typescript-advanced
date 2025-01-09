import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto } from "./product.dto";
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

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];

  products[index] = {
    ...prevData,
    ...changes
  };

  return products[index];
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

