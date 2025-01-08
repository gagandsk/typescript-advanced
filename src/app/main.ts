import { faker } from '@faker-js/faker';
import { createProduct, products } from "./products/product.service";

for (let index = 0; index < 10; index++) {
  createProduct({
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    stock: faker.number.int(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    categoryId: faker.string.uuid(),
  });
}

console.log(products);
