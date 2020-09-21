import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, HeaderComponent],
  exports: [NavbarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule { }
