import { Component } from '@angular/core'
import { ProductService } from './product.service'

@Component({
    selector: 'products',
    template: `
        <mat-toolbar>Products</mat-toolbar>
        <mat-grid-list  cols="3" *ngIf="products.length > 0; else loading">
            <mat-grid-tile *ngFor="let product of products">
                <product [data]="product"></product>                
            </mat-grid-tile>
        </mat-grid-list>
        <ng-template #loading>
            <div>
                No products to display                
            </div>
        </ng-template>
    `,

    styles: [`
        .mat-grid-list {
            background-color: lightgreen;
        }
    `],
    providers: [ProductService]    
})
export class ProductsComponent{
    products;

    constructor(productService: ProductService){
        this.products = productService.getProducts();
    }

} 
