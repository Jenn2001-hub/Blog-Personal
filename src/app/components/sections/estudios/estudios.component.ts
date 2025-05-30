import { Component } from '@angular/core'; //decorador para definir el componente
import { CommonModule } from '@angular/common'; //permite usar directivas básicas como *ngIf o *ngFor
import { GalleriaModule } from 'primeng/galleria'; 
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-estudios', //etiqueta HTML que se usa para este componente
  standalone: true, //Componente independiente, sin usar modulo
  imports: [CommonModule, GalleriaModule, ButtonModule], //Modulos que usa este componente
  templateUrl: './estudios.component.html', //archivo HTM donde se tengo definida la estructura del componente
  styleUrls: ['./estudios.component.scss'] // archivo SCSS donde estan los estilos del componente
})
//exporta la logica de este componente
export class EstudiosComponent {
  images = [
    {
      itemImageSrc: 'assets/images/estudios.jpg', //imagen principal
    }
  ];

  //configuracion de la galeria para que se adapte al tamaño de la pantalla
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
  //indica la imagen que est activa
  activeIndex: number = 0;
}