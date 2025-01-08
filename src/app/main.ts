import { faker } from '@faker-js/faker';
import { addProduct, products } from "./products/product.service";

for (let index = 0; index < 10; index++) {
  addProduct({
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log(products);
