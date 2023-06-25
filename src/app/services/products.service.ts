import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../types/Product';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  private url = 'https://fakestoreapi.com/products';

  categories = [
    "men's clothing",
    "women's clothing",
    'jewelery',
    'electronics',
  ];

  getProductByCategory(categoryNumber: number) {
    return this.http
      .get<Product[]>(this.url)
      .pipe(
        map((products: any) =>
          products.filter(
            (p: any) => p.category === this.categories[categoryNumber]
          )
        )
      );
  }
}
