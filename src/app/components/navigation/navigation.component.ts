import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, TabMenuModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  items: MenuItem[] = [
    { label: 'Sobre Mí', icon: 'pi pi-user', routerLink: '/sobre-mi' },
    { label: 'Mis Hobbies', icon: 'pi pi-heart', routerLink: '/hobbies' },
    { label: 'Mis Estudios', icon: 'pi pi-book', routerLink: '/estudios' },
    { label: 'Mis Viajes', icon: 'pi pi-map', routerLink: '/viajes' },
    { label: 'Mi Familia', icon: 'pi pi-users', routerLink: '/familia' }
  ];
}