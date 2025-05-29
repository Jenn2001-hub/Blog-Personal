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
      thumbnailImageSrc: 'assets/images/viajes1-thumb.jpg',
    },
    {
      itemImageSrc: 'assets/images/viajes2.jpg',
      thumbnailImageSrc: 'assets/images/viajes2-thumb.jpg',
    },
    {
      itemImageSrc: 'assets/images/viajes3.jpg',
      thumbnailImageSrc: 'assets/images/viajes3-thumb.jpg',
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