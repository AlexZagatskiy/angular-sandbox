import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-14-sandbox';

  navLinks = [
    { route: 'dynamic', title: 'Progressive rendering' },
    { route: 'intersection', title: 'Intersection observer' },
    { route: 'scroll_demo', title: 'Scroll animation' },
  ]
}
