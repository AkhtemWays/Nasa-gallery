import { MarsService } from './../mars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css'],
  providers: [MarsService],
})
export class MarsComponent implements OnInit {
  data;
  images: string[] = [];
  constructor(private service: MarsService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.data = data;
      for (let item of this.data.photos.slice(0, 100)) {
        this.images.push(item.img_src);
      }
    });
  }
}
