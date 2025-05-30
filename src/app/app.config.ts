import { ApplicationConfig } from '@angular/core'; //permite configurar la aplicacion angular
import { provideRouter } from '@angular/router'; //funcion que registra el sistema de rutas
import { routes } from './app.routes'; //importa las rutas definidas
import { provideAnimations } from '@angular/platform-browser/animations'; //funcion para habilitar las animaciones de angular
import { provideHttpClient } from '@angular/common/http'; //funcion que se habilita para hacer peticiones HTTP
import { ScrollTopModule } from 'primeng/scrolltop'; //modulo primeng que proporciona el boton bflotante

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), //registra las rutas de navegacion de la app
    provideAnimations(), //habilita las animaciones globales
    provideHttpClient(), //solicitudes HTTP
    ScrollTopModule 
  ]
};