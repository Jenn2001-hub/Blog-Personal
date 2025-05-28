import { Component } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {
  images = [
    {
      itemImageSrc: 'assets/images/viajes1.jpg',
      thumbnailImageSrc: 'assets/images/viajes1.jpg',
      alt: 'Paisaje montañoso'
    },
    {
      itemImageSrc: 'assets/images/viajes2.jpg',
      thumbnailImageSrc: 'assets/images/viajes2.jpg',
      alt: 'Pueblo mágico'
    },
    {
      itemImageSrc: 'assets/images/viajes3.jpg',
      thumbnailImageSrc: 'assets/images/viajes3.jpg',
      alt: 'Aventura'
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}