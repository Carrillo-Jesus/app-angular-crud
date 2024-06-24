export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Product 1", price: 10.99, description: "This is a great product!"},
  { id: 2, name: "Product 2", price: 19.99, description: "Another great product!"},
  { id: 3, name: "Product 3", price: 7.99, description: "This is a great product!"},
  { id: 4, name: "Product 4", price: 29.99, description: "Another great product!"},
  { id: 5, name: "Product 5", price: 4.99, description: "This is a great product!"},
];

export default products;
