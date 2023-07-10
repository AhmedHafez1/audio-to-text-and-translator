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
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<=', '=>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  slidesStore = [
    {
      id: '1',
      src: '../../assets/images/spacex-TV2gg2kZD1o-unsplash.jpg',
      alt: 'Beautiful sunset over the ocean',
      title: 'Sunset at the Beach',
      width: 500,
    },
    {
      id: '2',
      src: '../../assets/images/Speech.avif',
      alt: 'Lush green forest with a flowing river',
      title: 'Serene Forest Retreat',
      width: 500,
    },
    {
      id: '3',
      src: '../../assets/images/spacex-TV2gg2kZD1o-unsplash.jpg',
      alt: 'City skyline at night with colorful lights',
      title: 'Urban Nightscape',
      width: 500,
    },
  ];
}
