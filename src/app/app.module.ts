import { ImageOfDayModule } from './image-of-day/image-of-day.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesModule } from './images/images.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImagesModule,
    HttpClientModule,
    ImageOfDayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
