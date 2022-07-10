import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule
  ]
})
export class HomeModule { }
