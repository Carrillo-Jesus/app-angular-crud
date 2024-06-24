import { Component } from '@angular/core';
import products from './products.mock';
import { CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{
  products = products;
}
