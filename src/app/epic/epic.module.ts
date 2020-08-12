import { EpicImagesService } from './epic-images.service';
import { EpicService } from './epic.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EPICRoutingModule } from './epic-routing.module';
import { EpicComponent } from './epic.component';

@NgModule({
  declarations: [EpicComponent],
  imports: [CommonModule, EPICRoutingModule],
  providers: [EpicService],
  exports: [EpicComponent],
})
export class EPICModule {}
