type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'product 1',
  createdAt: new Date(),
  stock: 90
});

const createProduct = (data: Product) => {
  products.push(data)
}
