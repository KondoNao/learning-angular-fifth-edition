import {
  Component,
  input,
  InputSignal,
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
export class ProductDetailComponent {
  product: InputSignal<Product | undefined> = input<Product>();
  added: OutputEmitterRef<void> = output();

  addToCart(): void {
    this.added.emit();
  }
}
