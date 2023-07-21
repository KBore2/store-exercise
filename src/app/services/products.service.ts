import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../types/Product';

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

  getProductsByCategory(categoryNumber: number) {
    return this.http.get<Product[]>(
      `${this.url}/category/${this.categories[categoryNumber]}`
    );
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
}
