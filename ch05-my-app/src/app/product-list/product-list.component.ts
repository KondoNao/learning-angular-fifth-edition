import { Component, inject, OnInit } from '@angular/core';
import { FavoritesComponent } from '../favorites/favorites.component';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsService } from '../products.service';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, SortPipe, FavoritesComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService],
})
export class ProductListComponent implements OnInit {
  private readonly productService: ProductsService = inject(ProductsService);
  products: Product[] = [];
  selectedProduct: Product | undefined;

  constructor() {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }
}
