import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatHomeModule } from './feat-home/feat-home.module';
import { CoreModule } from './core/core.module';
import { FeatAboutModule } from './feat-about/feat-about.module';
import { FeatProductsModule } from './feat-products/feat-products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatHomeModule,
    CoreModule,
    FeatAboutModule,
    FeatProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
