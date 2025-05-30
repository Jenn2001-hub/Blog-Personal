import { Component } from '@angular/core'; //decorador para definir el componente
import { CommonModule } from '@angular/common'; //permite usar directivas básicas como *ngIf o *ngFor
import { RouterOutlet } from '@angular/router'; //renderiza el componente de la ruta activa
import { HeaderComponent } from './components/header/header.component'; //encabezado del sitio
import { NavigationComponent } from './components/navigation/navigation.component'; //componente de navegacion (menu)
import { FooterComponent } from './components/footer/footer.component'; //componente del pie de pagina (footer)
import { ScrollTopModule } from 'primeng/scrolltop'; //modulo de primeng par agregar boton flotante

@Component({
  selector: 'app-root', //etiqueta HTML que se usa para este componente
  standalone: true, //Componente independiente, sin usar modulo
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ScrollTopModule
  ], //Modulos que usa este componente
  templateUrl: './app.component.html', //archivo HTM donde se tengo definida la estructura del componente
  styleUrls: ['./app.component.scss'] // archivo SCSS donde estan los estilos del componente
})
//exporta la logica de este componente
export class AppComponent {
  title = 'blog-personal'; //titulo de la pagina
}