import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-entry',
  templateUrl: './main-entry.component.html',
  styleUrls: ['./main-entry.component.scss'],
})
export class MainEntryComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  slides = [
    {
      id: '1',
      src: '../../assets/images/kid.jpg',
      alt: 'Beautiful sunset over the ocean',
      title: 'Sunset at the Beach',
      description:
        'Access your previous transcriptions anytime and anywhere with our cloud storage.',
    },
    {
      id: '2',
      src: '../../assets/images/mic.jpg',
      alt: 'Lush green forest with a flowing river',
      title: 'Serene Forest Retreat',
      description:
        'Use our editor to make corrections, add punctuation, format text, and more.',
    },
    {
      id: '3',
      src: '../../assets/images/sound.jpg',
      alt: 'City skyline at night with colorful lights',
      title: 'Urban Nightscape',
      description:
        'Type or paste any text and listen to it in a variety of languages and voices.',
    },
    {
      id: '4',
      src: '../../assets/images/mic.jpg',
      alt: 'Lush green forest with a flowing river',
      title: 'Serene Forest Retreat',
      description:
        'Use your microphone or upload an audio file and get a transcription in seconds.',
    },
  ];
}
