import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PhonesComponent } from './phones/phones.component';
import { AirpodsComponent } from './airpods/airpods.component';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [
    PhonesComponent,
    AirpodsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
