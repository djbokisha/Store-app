import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products =[
      new Product(101, 'Phone Xl',799,'A large phonee with one of the best screens'),
      new Product(102, 'Phone Standard',699,'A great phone with one of the best cameras'),
      new Product(103, 'Phone Mini',299,''),


    ]
   }


   public getProducts(): Product[]{
     return this.products;
   }
}
