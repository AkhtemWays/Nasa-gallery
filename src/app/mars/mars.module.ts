import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarsRoutingModule } from './mars-routing.module';
import { MarsComponent } from './mars/mars.component';


@NgModule({
  declarations: [MarsComponent],
  imports: [
    CommonModule,
    MarsRoutingModule
  ]
})
export class MarsModule { }
