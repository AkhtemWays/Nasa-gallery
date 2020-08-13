import { SharedModule } from './shared/shared.module';
import { TechnologyModule } from './technology/technology.module';
import { MarsModule } from './mars/mars.module';
import { EPICModule } from './epic/epic.module';
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
    EPICModule,
    MarsModule,
    TechnologyModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
