import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../http-service.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  data;
  constructor(private http: HttpServiceService) {}

  ngOnInit(): void {
    this.http.getData().subscribe((data) => (this.data = data));
  }
}
