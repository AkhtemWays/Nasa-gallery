import { ImagesComponent } from './images/images/images.component';
import { ImageOfDayComponent } from './image-of-day/image-of-day/image-of-day.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'images', pathMatch: 'full' },
  {
    path: 'images',
    loadChildren: () =>
      import('./images/images.module').then((m) => m.ImagesModule),
    pathMatch: 'full',
  },
  {
    path: 'image-of-day',
    loadChildren: () =>
      import('./image-of-day/image-of-day.module').then(
        (m) => m.ImageOfDayModule
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
