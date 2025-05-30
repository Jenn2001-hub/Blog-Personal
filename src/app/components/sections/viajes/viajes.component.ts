import { Component } from '@angular/core'; //decorador para definir el componente
import { CommonModule } from '@angular/common'; //permite usar directivas básicas como *ngIf o *ngFor
import { GalleriaModule } from 'primeng/galleria'; // Importa el módulo Galleria de PrimeNG, galería de imágenes interactiva.
import { ButtonModule } from 'primeng/button'; // Importa el módulo de botones de PrimeNG para usar botones estilizados.

@Component({
  selector: 'app-viajes', //etiqueta HTML que se usa para este componente
  standalone: true, //Componente independiente, sin usar modulo
  imports: [CommonModule, GalleriaModule, ButtonModule], //Modulos que usa este componente
  templateUrl: './viajes.component.html', //archivo HTM donde se tengo definida la estructura del componente
  styleUrls: ['./viajes.component.scss'] // archivo SCSS donde estan los estilos del componente
})
//exporta la logica de este componente
export class ViajesComponent {
  images = [
    {
      itemImageSrc: 'assets/images/viajes1.jpg', //imagen principal
      thumbnailImageSrc: 'assets/images/viajes1-thumb.jpg', //imagen miniatura
    },
    {
      itemImageSrc: 'assets/images/viajes2.jpg', //imagen principal
      thumbnailImageSrc: 'assets/images/viajes2-thumb.jpg', //imagen miniatura
    },
    {
      itemImageSrc: 'assets/images/viajes3.jpg', //imagen principal
      thumbnailImageSrc: 'assets/images/viajes3-thumb.jpg', //imagen miniatura
    }
  ];

  //configuracion de la galeria para que se adapte al tamaño de la pantalla
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

  //indica la imagen que est activa
  activeIndex: number = 0;
}