import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  private readonly productsService: ProductsService = inject(ProductsService);

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
