// 0 === false
// '' === false
// false === false

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock || 10,
    isNew: isNew || true
  }
}

const product1 = createProduct(1, true, 5);
console.log(product1); // { id: 1, stock: 5, isNew: true }

const product2 = createProduct(1, true);
console.log(product2); // { id: 1, stock: 10, isNew: true }

const product3 = createProduct(1);
console.log(product3); // { id: 1, stock: 10, isNew: true }

// !!??!!
const product4 = createProduct(1, false, 0);
console.log(product4);// { id: 1, stock: 10, isNew: true } !!??!!

console.log('--V2--');
// ?? -> operador nullish-coalescing
export const createProductV2 = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const p1 = createProductV2(1, true, 5);
console.log(p1);

const p2 = createProductV2(1, true);
console.log(p2);

const p3 = createProductV2(1);
console.log(p3);

const p4 = createProductV2(1, false, 0);
console.log(p4);
