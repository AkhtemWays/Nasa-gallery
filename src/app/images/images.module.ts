import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { ImagesRoutingModule } from './images-routing.module';
import { routeComponents } from './images-routing.module';

@NgModule({
  declarations: [routeComponents],
  imports: [ImagesRoutingModule, CommonModule],
  providers: [{ provide: HttpServiceService, useClass: HttpServiceService }],
})
export class ImagesModule {}
