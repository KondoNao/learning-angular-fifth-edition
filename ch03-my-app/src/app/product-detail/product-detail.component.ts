import {
  Component,
  input,
  InputSignal,
  OnChanges,
  OnInit,
  output,
  OutputEmitterRef,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit, OnChanges {
  product: InputSignal<Product | undefined> = input<Product>();
  added: OutputEmitterRef<Product> = output<Product>();

  constructor() {
    console.log(`constructor(), Product: ${JSON.stringify(this.product())}`);
  }

  addToCart(): void {
    this.added.emit(this.product()!);
  }

  ngOnInit(): void {
    console.log(`ngOnInit(), Product: ${JSON.stringify(this.product())}`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    console.log('ngOnChanges(), changes: ', changes);
    console.log('ngOnChanges(), product: ', product);
    console.log('ngOnChanges(), oldValue: ', oldValue);
    console.log('ngOnChanges(), newValue: ', newValue);
  }
}
