import { ImageOfDayHttpService } from './image-of-day-http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageOfDayRoutingModule } from './image-of-day-routing.module';
import { ImageOfDayComponent } from './image-of-day/image-of-day.component';

@NgModule({
  declarations: [ImageOfDayComponent],
  imports: [CommonModule, ImageOfDayRoutingModule],
  providers: [
    { provide: ImageOfDayHttpService, useClass: ImageOfDayHttpService },
  ],
})
export class ImageOfDayModule {}
