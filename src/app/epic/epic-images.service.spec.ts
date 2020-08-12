import { TestBed } from '@angular/core/testing';

import { EpicImagesService } from './epic-images.service';

describe('EpicImagesService', () => {
  let service: EpicImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpicImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
