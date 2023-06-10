import { TestBed } from '@angular/core/testing';

import { AudioConverterService } from './audio-converter.service';

describe('AudioConverterService', () => {
  let service: AudioConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
