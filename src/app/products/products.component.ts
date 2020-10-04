import { Component, OnInit } from '@angular/core'
import { ProductService } from '../product/product.service'
import {   trigger, state, style,
    animate, transition, stagger, query } from '@angular/animations';

@Component({
    selector: 'products',
    templateUrl: `products.component.html`,
    providers: [ProductService],
    styleUrls: ['products.component.css'],
    animations: [
        trigger('showProduct', [
            state('start', style({
                marginTop: "30px",
                opacity: 0
            })),
            state('end', style({
                marginTop: 0,
                opacity: 1
            })),
            transition('start => end', [
                query(":self", [
                    stagger(1000, [
                        animate('0.6s ease-in')
                    ])
                ])
            ]),
        ])
    ]

})
export class ProductsComponent implements OnInit{
    products;
    showProducts: string = "start";

    constructor(private _productService: ProductService){
    }

    ngOnInit(){
        this.products = this._productService.getProducts();
        setTimeout(() => {
            this.showProducts = "end";
        }, 1000);
    }

} 
