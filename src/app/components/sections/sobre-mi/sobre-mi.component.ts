import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent {
  images = [
    {
      itemImageSrc: 'assets/images/sobremi.jpg',
      thumbnailImageSrc: 'assets/images/sobremi.jpg',
      alt: 'Jennifer sonriendo'
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
}