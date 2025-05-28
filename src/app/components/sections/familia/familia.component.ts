import { Component } from '@angular/core';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss']
})
export class FamiliaComponent {
  images = [
    {
      itemImageSrc: 'assets/images/familia1.jpg',
      thumbnailImageSrc: 'assets/images/familia1.jpg',
      alt: 'Con mamá'
    },
    {
      itemImageSrc: 'assets/images/familia2.jpg',
      thumbnailImageSrc: 'assets/images/familia2.jpg',
      alt: 'Hermanas'
    },
    {
      itemImageSrc: 'assets/images/familia3.jpg',
      thumbnailImageSrc: 'assets/images/familia3.jpg',
      alt: 'Gatitos'
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