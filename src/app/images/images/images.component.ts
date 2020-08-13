import { IIMagesData } from './../data.interface';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  data: any;
  cleanedData: IIMagesData[] = [];
  pagination: number = 4;
  full: boolean = false;
  loading: boolean = false;
  constructor(
    private http: HttpServiceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.makeCall();
  }
  makeCall() {
    this.loading = true;
    this.http.getData(this.pagination).subscribe((data) => {
      this.http.full ? (this.full = true) : null;
      this.data = data;
      for (let item of this.data) {
        const link = item.links[0].href;
        const description = item.data[0].description;
        const photographer = item.data[0].photographer;
        const title = item.data[0].title;
        const location = item.data[0].location;
        const date_created = item.data[0].date_created;
        this.cleanedData.push({
          link: link,
          description: description,
          photographer: photographer,
          title: title,
          location: location,
          date_created: date_created,
        });
      }
    });
    this.pagination += 4;
    this.loading = false;
  }
  onScroll() {
    this.spinner.show();
    if (!this.full) {
      setTimeout(() => {
        this.makeCall();
      }, 2000);
    }
  }
}
