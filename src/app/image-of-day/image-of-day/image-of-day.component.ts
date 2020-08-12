import { IDayImage } from './../day-image.interface';
import { ImageOfDayHttpService } from './../image-of-day-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrls: ['./image-of-day.component.css'],
})
export class ImageOfDayComponent implements OnInit {
  imageObject: any;
  cleanedImageObject: IDayImage;

  constructor(private service: ImageOfDayHttpService) {}

  getUrl() {
    return 'url(' + this.cleanedImageObject.url + ')';
  }

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.imageObject = data;

      const cleanedImage: IDayImage = {
        copyright: this.imageObject.copyright,
        url: this.imageObject.url,
        title: this.imageObject.title,
        date: this.imageObject.date,
      };

      this.cleanedImageObject = cleanedImage;
    });
  }
}
