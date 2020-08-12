import { IData } from './../data.interface';
import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  data: any;
  cleanedData: IData[] = [];
  links: string[] = [];
  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.http.getData().subscribe((data) => {
      this.data = data;
      for (let item of this.data.collection.items) {
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
  }
}
