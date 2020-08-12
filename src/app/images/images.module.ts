import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpServiceService } from './http-service.service';
import { ImagesRoutingModule } from './images-routing.module';
import { routeComponents } from './images-routing.module';

@NgModule({
  declarations: [routeComponents],
  imports: [CommonModule, ImagesRoutingModule],
  providers: [{ provide: HttpServiceService, useClass: HttpServiceService }],
})
export class ImagesModule {}
