import { Component } from '@angular/core'; //decorador para definir el componente
import { CommonModule } from '@angular/common'; //permite usar directivas básicas como *ngIf o *ngFor

@Component({
  selector: 'app-footer', //etiqueta HTML que se usa para este componente
  standalone: true, //Componente independiente, sin usar modulo
  imports: [CommonModule], //Modulos que usa este componente
  templateUrl: './footer.component.html',  //archivo HTM donde se tengo definida la estructura del componente
  styleUrls: ['./footer.component.scss'] // archivo SCSS donde estan los estilos del componente
})
export class FooterComponent {} //exporta la logica de este componente