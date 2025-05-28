import { Component } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent {
  images = [
    {
      itemImageSrc: 'assets/images/estudios.jpg',
      thumbnailImageSrc: 'assets/images/estudios.jpg',
      alt: 'Graduación'
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