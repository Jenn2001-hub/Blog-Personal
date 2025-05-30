import { bootstrapApplication } from '@angular/platform-browser'; //funcion para iniciar manualmente la pagina
import { appConfig } from './app/app.config'; //configuracion de la aplicacion
import { AppComponent } from './app/app.component'; //importa el componente raiz

//inicializa con el componente princilar 
bootstrapApplication(AppComponent, appConfig)
  //si hay algun error durante el arranque lo muestra en la consola
  .catch((err) => console.error(err));