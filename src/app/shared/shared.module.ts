import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SearchComponent,
    AuthComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    SearchComponent,
    AuthComponent,
  ],
})
export class SharedModule {}
