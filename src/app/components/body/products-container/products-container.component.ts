import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit {
  private productsService = inject(ProductsService);
  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.productsService.getProductsByCategory(0);
  }

  getProductsByCategory(categoryNumber: number) {
    this.products$ = this.productsService.getProductsByCategory(categoryNumber);
  }
}
