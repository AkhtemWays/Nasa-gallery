import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarsRoutingModule } from './mars-routing.module';
import { MarsComponent } from './mars/mars.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [MarsComponent],
  imports: [
    CommonModule,
    MarsRoutingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
  ],
})
export class MarsModule {}
