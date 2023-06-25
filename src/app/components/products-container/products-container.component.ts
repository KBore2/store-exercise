import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent {
  private router = inject(Router);

  productDetails() {
    this.router.navigate(['/details']);
  }
}
