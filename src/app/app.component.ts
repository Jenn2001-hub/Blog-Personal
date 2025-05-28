import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BLOG-ANGULAR';
  activeTabIndex: number = 0;

  onTabChange(event: { index: number }) {
    this.activeTabIndex = event.index;
  }
}