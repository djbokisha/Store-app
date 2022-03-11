import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  public product: Product;

  

// localhost:4200/products/:prodcutId
  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) {
                this.route.paramMap.subscribe(params =>{
                  const pId: number = Number(params.get('productId'));

           this.product = this.productService.getProducts()
                  .filter(p => p.productId === pId)[0];
                })

   }

  ngOnInit(): void {

    
  }


  public addToCart(){
    this.cartService.addToCart(this.product)
    console.log(this.product);
    
  }

}
