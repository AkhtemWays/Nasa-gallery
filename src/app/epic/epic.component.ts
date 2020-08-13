import { EpicService } from './epic.service';
import { IEarthData } from './epic.interface';
import { EpicImagesService } from './epic-images.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css'],
  providers: [EpicImagesService, EpicService],
})
export class EpicComponent implements OnInit {
  data: IEarthData[] = [];
  full: boolean = false;
  loading: boolean = false;
  constructor(
    private epicImagesService: EpicImagesService,
    private spinner: NgxSpinnerService,
    private http: EpicService
  ) {}
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
    this.loading = true;
    this.epicImagesService.getImageData();
    this.data = this.epicImagesService.cleanedData;
    this.loading = false;
  }
  onScroll() {
    this.spinner.show();
    this.http.full ? (this.full = true) : null;
    if (!this.full) {
      this.epicImagesService.getImageData();
      this.data = this.epicImagesService.cleanedData;
    }
  }
}
