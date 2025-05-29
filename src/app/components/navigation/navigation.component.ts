import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      { 
        label: 'Sobre Mí', 
        icon: 'pi pi-user', 
        command: () => this.navigateTo('/sobre-mi') 
      },
      { 
        label: 'Mis Hobbies', 
        icon: 'pi pi-heart', 
        command: () => this.navigateTo('/hobbies') 
      },
      { 
        label: 'Mis Estudios', 
        icon: 'pi pi-book', 
        command: () => this.navigateTo('/estudios') 
      },
      { 
        label: 'Mis Viajes', 
        icon: 'pi pi-map', 
        command: () => this.navigateTo('/viajes') 
      },
      { 
        label: 'Mi Familia', 
        icon: 'pi pi-users', 
        command: () => this.navigateTo('/familia') 
      }
    ];
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}