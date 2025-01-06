// 0 === false
// '' === false
// false === false

export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    stock,
    isNew
  }
}

const product1 = createProduct(1, true, 5);
console.log(product1); // { id: 1, stock: 5, isNew: true }

const product2 = createProduct(2, true);
console.log(product2); // { id: 2, stock: 10, isNew: true }

const product3 = createProduct(3);
console.log(product3); // { id: 3, stock: 10, isNew: true }

const product4 = createProduct(4, true, 100);
console.log(product4); //{ id: 4, stock: 100, isNew: true }

const product5 = createProduct(5, true);
console.log(product5); //{ id: 5, stock: 10, isNew: true }
