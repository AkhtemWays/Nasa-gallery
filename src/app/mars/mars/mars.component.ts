import { MarsService } from './../mars.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css'],
  providers: [MarsService],
})
export class MarsComponent implements OnInit {
  data;
  images: string[] = [];
  pagination: number = 4;
  full: boolean = false;
  constructor(
    private service: MarsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.makeCall();
  }
  makeCall() {
    this.service.getData(this.pagination).subscribe((data) => {
      this.service.full ? (this.full = true) : null;
      for (let item of data) {
        this.images.push(item.img_src);
      }
      this.pagination += 4;
    });
  }
  onScroll() {
    this.spinner.show();
    if (!this.full) {
      this.makeCall();
    }
  }
}
