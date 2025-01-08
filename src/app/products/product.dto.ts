import { Product } from "./product.model";

//campos a OMITIR al 'crear' un producto
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//campos a ELEGIR = Pick
type example = Pick<Product, 'color' | 'description' >
