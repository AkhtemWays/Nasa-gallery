import { ITechnology } from './technology.interface';
import { TechnologyService } from './../technology.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers: [TechnologyService],
})
export class TechnologyComponent implements OnInit {
  cleanedData: ITechnology[] = [];
  pagination: number = 3;
  full: boolean = false;
  loading: boolean = false;
  constructor(
    private service: TechnologyService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.makeCall();
    this.loading = false;
  }
  onScroll() {
    this.spinner.show();
    if (!this.full) {
      this.makeCall();
    }
  }
  makeCall() {
    this.service.getData(this.pagination).subscribe((data) => {
      this.service.full ? (this.full = true) : null;
      for (let item of data) {
        this.cleanedData.push({
          description: item[3],
          url: item[10],
        });
      }
      this.pagination += 3;
    });
  }
}
