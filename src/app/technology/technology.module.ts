import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology/technology.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [TechnologyComponent],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    NgxSpinnerModule,
    InfiniteScrollModule,
  ],
})
export class TechnologyModule {}
