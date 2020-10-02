import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Beginning
import { AppComponent } from './app.component';

// Rating
import { StarComponent }   from './star.component';
import { StarFillComponent }   from './starfill.component';
import { RatingComponent }   from './rating.component';

// Products
import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';

// Content Insertion
import { JumboTronComponent } from './jumbotron.component';

// Pipes
import { TruncatePipe } from './truncate.pipe';
import { SwearPipe } from './swear.pipe';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
