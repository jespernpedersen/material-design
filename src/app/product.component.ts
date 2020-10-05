import {Component, Input} from '@angular/core';

@Component({
    selector: 'product',
    template: `
        <mat-card class="example-card">
            <mat-card-header>
                <mat-card-title>{{ data.productName }}</mat-card-title>
                <mat-card-subtitle>{{ data.category }}</mat-card-subtitle>
                <rating
                [rating]="data.rating"
                [numOfReviews]="data.numOfReviews"
                >
                </rating>
                <div [ngSwitch]="data.rating">
                <div *ngSwitchCase="1">Poor</div>
                <div *ngSwitchCase="2">Fair</div>
                <div *ngSwitchCase="3">Good</div>
                <div *ngSwitchCase="4">Very Good</div>
                <div *ngSwitchCase="5">Excellent</div>
                <div *ngSwitchDefault>Not Rated</div>
            </div>
            </mat-card-header>
            <img mat-card-image src="{{ data.imageUrl }}" alt="Photo of a Shiba Inu">
            <mat-card-content>
                <p>
                    {{ data.description | swear }}
                </p>
            </mat-card-content>
            <mat-card-actions>
                <button mat-button class="buy" color="primary">Add To Cart</button>
                <button mat-button>Share</button>
            </mat-card-actions>
        </mat-card>
    `,
    styles: [`
        .example-card {
            max-width: 400px;
        }
        .buy {
            background-color: #40a251;
            color: #fff;
            outline: none;
        }
    `]
})
export class ProductComponent {
    @Input() data;
}
