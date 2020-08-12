import { IEarthData } from './epic.interface';
import { EpicImagesService } from './epic-images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css'],
  providers: [EpicImagesService],
})
export class EpicComponent implements OnInit {
  data: IEarthData[] = [];
  constructor(private epicImagesService: EpicImagesService) {}
  getUrl(item: IEarthData) {
    return (
      'https://epic.gsfc.nasa.gov/archive/natural/' +
      item.year +
      '/' +
      item.month +
      '/' +
      item.day +
      '/jpg/' +
      item.image +
      '.jpg'
    );
  }

  ngOnInit(): void {
    this.epicImagesService.getImageData();
    this.data = this.epicImagesService.cleanedData;
  }
}
