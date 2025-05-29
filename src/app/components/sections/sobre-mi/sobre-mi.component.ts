import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule, GalleriaModule, ButtonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {
  images = [
    {
      itemImageSrc: 'assets/images/sobremi.jpg',
      thumbnailImageSrc: 'assets/images/sobremi.jpg',
      title: 'Sobre mí'
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  activeIndex: number = 0;
}