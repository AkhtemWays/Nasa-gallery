import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesModule } from './images/images.module';
import { HttpServiceService } from './images/http-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ImagesModule, HttpClientModule],
  providers: [{ provide: HttpServiceService, useClass: HttpServiceService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
