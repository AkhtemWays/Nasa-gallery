import { ImagesComponent } from './images/images.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'images', component: ImagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImagesRoutingModule {}

export const routeComponents = [ImagesComponent];
