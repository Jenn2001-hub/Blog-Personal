import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-familia',
  standalone: true,
  imports: [CommonModule, GalleriaModule, ButtonModule],
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss']
})
export class FamiliaComponent {
  images = [
    {
      itemImageSrc: 'assets/images/familia1.jpg',
      thumbnailImageSrc: 'assets/images/familia1.jpg',
      alt: 'Con mamá',
      title: 'Con mi mamá'
    },
    {
      itemImageSrc: 'assets/images/familia2.jpg',
      thumbnailImageSrc: 'assets/images/familia2.jpg',
      alt: 'Hermanas',
      title: 'Con mis hermanas'
    },
    {
      itemImageSrc: 'assets/images/familia3.jpg',
      thumbnailImageSrc: 'assets/images/familia3.jpg',
      alt: 'Gatitos',
      title: 'Mis gatitos'
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