import { Component } from '@angular/core'; //decorador para definir el componente
import { CommonModule } from '@angular/common'; //permite usar directivas básicas como *ngIf o *ngFor

@Component({
  selector: 'app-header', //etiqueta HTML que se usa para este componente
  standalone: true, //Componente independiente, sin usar modulo
  imports: [CommonModule], //Modulos que usa este componente
  templateUrl: './header.component.html', //archivo HTM donde se tengo definida la estructura del componente
  styleUrls: ['./header.component.scss'] // archivo SCSS donde estan los estilos del componente
})
export class HeaderComponent { //exporta la logica de este componente
  headerImage = 'assets/images/portada-personal.jpg'; //exporta la imagen de la portada
}