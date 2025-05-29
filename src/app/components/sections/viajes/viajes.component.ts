import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [CommonModule, GalleriaModule, ButtonModule],
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {
  images = [
    {
      itemImageSrc: 'assets/images/viajes1.jpg',
      thumbnailImageSrc: 'assets/images/viajes1.jpg',
      alt: 'Paisaje montañoso',
      title: 'Paisaje montañoso'
    },
    {
      itemImageSrc: 'assets/images/viajes2.jpg',
      thumbnailImageSrc: 'assets/images/viajes2.jpg',
      alt: 'Pueblo mágico',
      title: 'Pueblo mágico'
    },
    {
      itemImageSrc: 'assets/images/viajes3.jpg',
      thumbnailImageSrc: 'assets/images/viajes3.jpg',
      alt: 'Aventura',
      title: 'Aventura'
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

  activeIndex: number = 0;
}