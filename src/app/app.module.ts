import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { ScrollPanelModule } from 'primeng/scrollpanel';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreMiComponent } from './components/sections/sobre-mi/sobre-mi.component';
import { HobbiesComponent } from './components/sections/hobbies/hobbies.component';
import { EstudiosComponent } from './components/sections/estudios/estudios.component';
import { ViajesComponent } from './components/sections/viajes/viajes.component';
import { FamiliaComponent } from './components/sections/familia/familia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    SobreMiComponent,
    HobbiesComponent,
    EstudiosComponent,
    ViajesComponent,
    FamiliaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    
    // PrimeNG Modules
    TabViewModule,
    ButtonModule,
    CardModule,
    GalleriaModule,
    ScrollPanelModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }