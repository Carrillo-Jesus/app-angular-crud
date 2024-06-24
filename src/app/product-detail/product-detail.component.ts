import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products, { Product } from '../products/products.mock';
import { CurrencyPipe, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productId : number = 0;
  product : Product = { id: 0, name: '', price: 0, description: ''};
  products = products;
  isLoading = true;

  constructor(private _router: ActivatedRoute) { }

  setProduct() {
    this.product = products.find(p => p.id === this.productId) || products[0];
    this.isLoading = false;
  }

  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this.productId = +params['id'];
      setTimeout(() => {
        this.setProduct();
      }, 2000);
    });

  }
}
