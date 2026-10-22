import {
  Component,
  input,
  InputSignal,
  OnInit,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
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
}
