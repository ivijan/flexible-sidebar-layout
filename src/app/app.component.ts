import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  toggleSidebar(event) {
    event.preventDefault();
    const flexRoot = document.getElementsByClassName('flex-layout-wrapper') as HTMLCollection;
    flexRoot[0].classList.toggle('flex-layout-closed');
  }
}
