import { Component } from '@angular/core'
import { AdService } from './ad.service'

@Component({
    selector: 'ads',
    template: `
        <div class="products-wrapper">
            <h2>Ads</h2>      
            <div class="products col-3">
                <div *ngFor="let ad of ads" class="product">
                    <div class="product-details">
                        <h3>{{ ad }}</h3>
                    </div>
                </div>
            </div>  
        </div>  
        `
})
export class AdsComponent {
    ads;

    constructor(adService: AdService) {
        this.ads = adService.getAds();
    }
}
