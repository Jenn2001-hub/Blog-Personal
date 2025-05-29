import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Importaciones de estilos de PrimeNG
import "primeng/resources/themes/lara-light-purple/theme.css";
import "primeng/resources/primeng.css";
import "primeicons/primeicons.css";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));