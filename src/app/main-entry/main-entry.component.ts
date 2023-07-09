import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { SwiperDirective } from '../swiper.directive';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-main-entry',
  templateUrl: './main-entry.component.html',
  styleUrls: ['./main-entry.component.scss'],
  standalone: true,
  imports: [CommonModule, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainEntryComponent {
  slides = [
    {
      image: 'assets/images/slide1.png',
      title: 'Transcribe speech to text',
      description:
        'Use your microphone or upload an audio file and get a transcription in seconds.',
    },
    {
      image: 'assets/images/slide2.png',
      title: 'Synthesize text to speech',
      description:
        'Type or paste any text and listen to it in a variety of languages and voices.',
    },
    {
      image: 'assets/images/slide3.png',
      title: 'Edit your transcriptions',
      description:
        'Use our editor to make corrections, add punctuation, format text, and more.',
    },
    {
      image: 'assets/images/slide4.png',
      title: 'Save and manage your history',
      description:
        'Access your previous transcriptions anytime and anywhere with our cloud storage.',
    },
  ];

  public config: SwiperOptions = {
    autoHeight: true,
    spaceBetween: 20,
    navigation: false,
    pagination: { clickable: true, dynamicBullets: true },
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
    },
  };
}
