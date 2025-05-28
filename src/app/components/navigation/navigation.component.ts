import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Output() tabChange = new EventEmitter<number>();
  
  tabs = [
    { label: 'Sobre Mí', index: 0 },
    { label: 'Mis Hobbies', index: 1 },
    { label: 'Mis Estudios', index: 2 },
    { label: 'Mis Viajes', index: 3 },
    { label: 'Mi Familia', index: 4 }
  ];

  changeTab(index: number) {
    this.tabChange.emit(index);
  }
}