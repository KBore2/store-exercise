import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  router = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  product$!: Observable<Product>;

  ngOnInit(): void {
    this.product$ = this.router.params.pipe(
      map((id: any) => id['id']),
      switchMap((id) => this.productsService.getProductById(id))
    );
  }
}
