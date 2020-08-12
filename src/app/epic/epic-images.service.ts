import { IEarthData } from './epic.interface';
import { EpicService } from './epic.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EpicImagesService {
  simpleData: any;
  cleanedData: IEarthData[] = [];
  constructor(private epicService: EpicService) {}

  getImageData() {
    this.epicService.getData().subscribe((data) => {
      this.simpleData = data;
      for (let item of this.simpleData) {
        const cleanedItem = {
          date: item.date,
          centroid_coordinates: item.centroid_coordinates,
          image: item.image,
          dscovr_coordinates: item.dscovr_j2000_position,
          year: item.date.slice(0, 4),
          month: item.date.slice(5, 7),
          day: item.date.slice(8, 10),
        };
        this.cleanedData.push(cleanedItem);
      }
    });
  }
}
