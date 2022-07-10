import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from'@angular/material/icon'

@NgModule({
  declarations: [
    NavbarComponent

  ],
  imports: [
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    CommonModule,
    CoreModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HeaderModule { }
