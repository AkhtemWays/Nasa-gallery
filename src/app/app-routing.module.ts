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
  {
    path: 'epic',
    loadChildren: () => import('./epic/epic.module').then((m) => m.EPICModule),
    pathMatch: 'full',
  },
  {
    path: 'mars',
    loadChildren: () => import('./mars/mars.module').then((m) => m.MarsModule),
    pathMatch: 'full',
  },
  {
    path: 'technology',
    loadChildren: () =>
      import('./technology/technology.module').then((m) => m.TechnologyModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
