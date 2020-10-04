import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Beginning
import { AppComponent } from './app.component';

// Rating
import { StarComponent }   from './star.component';
import { StarFillComponent }   from './starfill.component';
import { RatingComponent }   from './rating.component';

// Products
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

// Content Insertion
import { JumboTronComponent } from './jumbotron.component';

// Pipes
import { TruncatePipe } from './truncate.pipe';
import { SwearPipe } from './swear.pipe';
import { ProductService } from './product/product.service';
import {MatCard, MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    StarFillComponent,
    RatingComponent,
    ProductComponent,
    ProductsComponent,
    TruncatePipe,
    SwearPipe,
    JumboTronComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
