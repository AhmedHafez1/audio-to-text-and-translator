import { Injectable } from '@angular/core';
import * as ffmpeg from 'ffmpeg.js/ffmpeg-mp4';

@Injectable()
export class AudioConverterService {
  constructor() {}

  convertToWav(inputFile: Blob): Promise<Blob> {
    return Promise.resolve(new Blob());
  }
}
