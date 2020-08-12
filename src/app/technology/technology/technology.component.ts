import { ITechnology } from './technology.interface';
import { TechnologyService } from './../technology.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers: [TechnologyService],
})
export class TechnologyComponent implements OnInit {
  cleanedData: ITechnology[] = [];
  data;
  constructor(private service: TechnologyService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.data = data;
      for (let item of this.data) {
        this.cleanedData.push({
          description: item[3],
          url: item[10],
        });
      }
      console.log(this.cleanedData);
    });
  }
}
