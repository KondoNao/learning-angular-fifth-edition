import { inject, Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';

@Injectable()
export class ProductViewService {
  private readonly productsService: ProductsService = inject(ProductsService);

  private product: Product | undefined;

  constructor() {}

  getProduct(id: number): Product | undefined {
    const products: Product[] = this.productsService.getProducts();

    // if (!this.product) {
    //   this.product = products.find((product) => product.id === id);
    // }
    this.product ??= products.find((product) => product.id === id);

    return this.product;
  }
}
