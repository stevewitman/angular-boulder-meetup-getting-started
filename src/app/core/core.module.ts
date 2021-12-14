import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SearchComponent,
    AuthComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SearchComponent,
    AuthComponent,
  ],
})
export class CoreModule {}
