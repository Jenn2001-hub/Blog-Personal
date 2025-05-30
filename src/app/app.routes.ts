import { Routes } from '@angular/router'; //Routes que se usan para definir las rutas de la pagina
//importa los componentes que se usan en las rutas
import { SobreMiComponent } from './components/sections/sobre-mi/sobre-mi.component'; 
import { HobbiesComponent } from './components/sections/hobbies/hobbies.component';
import { EstudiosComponent } from './components/sections/estudios/estudios.component';
import { ViajesComponent } from './components/sections/viajes/viajes.component';
import { FamiliaComponent } from './components/sections/familia/familia.component';

export const routes: Routes = [
  //cuando las url sean similar a las que se meustran direcciona a los componentes correspondientes
  { path: '', redirectTo: '/sobre-mi', pathMatch: 'full' },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'viajes', component: ViajesComponent },
  { path: 'familia', component: FamiliaComponent },
  { path: '**', redirectTo: '/sobre-mi' } 
];