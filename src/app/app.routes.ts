import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre-mi', pathMatch: 'full' },
  { path: 'sobre-mi', component: AppComponent },
  { path: 'hobbies', component: AppComponent },
  { path: 'estudios', component: AppComponent },
  { path: 'viajes', component: AppComponent },
  { path: 'familia', component: AppComponent }
];