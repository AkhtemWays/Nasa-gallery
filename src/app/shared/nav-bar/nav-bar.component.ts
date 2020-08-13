import { fade } from './nav-bar.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [fade],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
