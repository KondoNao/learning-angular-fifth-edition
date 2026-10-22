import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { ProductViewService } from '../product-view.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit {
  private readonly productViewService: ProductViewService =
    inject(ProductViewService);

  id: InputSignal<number | undefined> = input<number>();
  product: Product | undefined;

  constructor() {}

  ngOnInit(): void {
    this.product = this.productViewService.getProduct(this.id()!);
  }
}
