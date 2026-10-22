import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-product-view',
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent {
  id: InputSignal<number | undefined> = input<number>();
}
