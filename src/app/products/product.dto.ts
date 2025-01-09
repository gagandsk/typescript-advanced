import { Product } from "./product.model";

//campos a OMITIR al 'crear' un producto
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//campos a ELEGIR = Pick
type example = Pick<Product, 'color' | 'description' >

export interface UpdateProductDto extends Partial<CreateProductDto>{}

//todos los campos son requeridos
type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>;
}

//solo lectura
type example3 = Readonly<Product>;
