import { TestBed } from '@angular/core/testing';

import { ImageOfDayHttpService } from './image-of-day-http.service';

describe('ImageOfDayHttpService', () => {
  let service: ImageOfDayHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageOfDayHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
