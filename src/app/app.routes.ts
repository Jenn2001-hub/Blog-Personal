import { Routes } from '@angular/router';
import { SobreMiComponent } from './components/sections/sobre-mi/sobre-mi.component';
import { HobbiesComponent } from './components/sections/hobbies/hobbies.component';
import { EstudiosComponent } from './components/sections/estudios/estudios.component';
import { ViajesComponent } from './components/sections/viajes/viajes.component';
import { FamiliaComponent } from './components/sections/familia/familia.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sobre-mi', pathMatch: 'full' },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'viajes', component: ViajesComponent },
  { path: 'familia', component: FamiliaComponent },
  { path: '**', redirectTo: '/sobre-mi' }
];