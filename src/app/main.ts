import { faker } from '@faker-js/faker';
import { createProduct, findProducts, products, updateProduct } from "./products/product.service";

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
const product1 = products[0];
updateProduct(product1.id, {
  title: 'Nike Blazar 77 vintage',
  stock: 41,
})

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  tags: ['a', 'b', 'c']
});
