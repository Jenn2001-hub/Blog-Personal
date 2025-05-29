import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, GalleriaModule, ButtonModule],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent {
  images = [
    {
      itemImageSrc: 'assets/images/hobbies1.jpg',
      thumbnailImageSrc: 'assets/images/hobbies1-thumb.jpg',
    },
    {
      itemImageSrc: 'assets/images/hobbies2.jpg',
      thumbnailImageSrc: 'assets/images/hobbies2-thumb.jpg',
    },
    {
      itemImageSrc: 'assets/images/hobbies3.jpg',
      thumbnailImageSrc: 'assets/images/hobbies3-thumb.jpg',
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