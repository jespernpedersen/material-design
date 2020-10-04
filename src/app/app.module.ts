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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Design
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';





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
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
