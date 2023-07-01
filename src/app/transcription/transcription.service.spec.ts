import { TestBed } from '@angular/core/testing';

import { AudioTranscriptionService } from './transcription.service';

describe('AudioTranscriptionService', () => {
  let service: AudioTranscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioTranscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
