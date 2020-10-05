import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <mat-tab-group>
      <mat-tab label="Products">
        <products>
        </products>
      </mat-tab>
    </mat-tab-group>
  `
})
export class AppComponent {
}
