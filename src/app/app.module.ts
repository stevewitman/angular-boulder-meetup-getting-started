import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatHomeModule } from './feat-home/feat-home.module';
import { SharedModule } from './shared/shared.module';
import { FeatAboutModule } from './feat-about/feat-about.module';
import { FeatProductsModule } from './feat-products/feat-products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FeatHomeModule,
    SharedModule,
    FeatAboutModule,
    FeatProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
