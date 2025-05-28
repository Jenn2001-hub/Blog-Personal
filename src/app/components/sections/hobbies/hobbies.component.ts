import { Component } from '@angular/core';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
    standalone: false
})
export class HobbiesComponent {
  images = [
    {
      itemImageSrc: 'assets/images/hobbies1.jpg',
      thumbnailImageSrc: 'assets/images/hobbies1.jpg',
      alt: 'Leyendo un libro'
    },
    {
      itemImageSrc: 'assets/images/hobbies2.jpg',
      thumbnailImageSrc: 'assets/images/hobbies2.jpg',
      alt: 'Manualidades'
    },
    {
      itemImageSrc: 'assets/images/hobbies3.jpg',
      thumbnailImageSrc: 'assets/images/hobbies3.jpg',
      alt: 'Ciclovía'
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