import { Component, inject, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  providers: [{ provide: ProductsService, useClass: FavoritesService }],
})
export class FavoritesComponent implements OnInit {
  private readonly productsService: ProductsService = inject(ProductsService);

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
