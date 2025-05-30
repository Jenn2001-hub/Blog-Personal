import { Component } from '@angular/core'; //decorador para definir el componente
import { CommonModule } from '@angular/common'; //permite usar directivas básicas como *ngIf o *ngFor
import { MenuItem } from 'primeng/api'; //Importa para definir los items del menu
import { TabMenuModule } from 'primeng/tabmenu'; //menu de pestañas de primeng
import { RouterModule } from '@angular/router'; //Permite navegar entra rutas

@Component({
  selector: 'app-navigation', //etiqueta HTML que se usa para este componente
  standalone: true, //Componente independiente, sin usar modulo
  imports: [CommonModule, TabMenuModule, RouterModule], //Modulos que usa este componente
  templateUrl: './navigation.component.html', //archivo HTM donde se tengo definida la estructura del componente
  styleUrls: ['./navigation.component.scss'] // archivo SCSS donde estan los estilos del componente
})
//exporta la logica de este componente
export class NavigationComponent {
  //Objetos que respresentan los items del menu
  items: MenuItem[] = [
    //Etiqueta, iconos y ruta del item
    { label: 'Sobre Mí', icon: 'pi pi-user', routerLink: '/sobre-mi' },
    { label: 'Mis Hobbies', icon: 'pi pi-heart', routerLink: '/hobbies' },
    { label: 'Mis Estudios', icon: 'pi pi-book', routerLink: '/estudios' },
    { label: 'Mis Viajes', icon: 'pi pi-map', routerLink: '/viajes' },
    { label: 'Mi Familia', icon: 'pi pi-users', routerLink: '/familia' }
  ];
}