import { EpicService } from './epic.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EPICRoutingModule } from './epic-routing.module';
import { EpicComponent } from './epic.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [EpicComponent],
  imports: [
    CommonModule,
    EPICRoutingModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
  ],
  providers: [EpicService],
})
export class EPICModule {}
